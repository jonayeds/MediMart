import mongoose, { Types } from "mongoose";
import { IReqUser } from "../../interfaces";
import { AppError } from "../../utils/appError";
import { Medicine } from "../medicine/medicine.model";
import { IOrder, TOrderStatus } from "./order.interface";
import { Order } from "./order.model";
import { AllowedStatus } from "./order.constant";
import QueryBuilder from "../../builder/QueryBuilder";

const placeOrder = async (payload: IOrder, user: IReqUser) => {
  const isMedicineExists = await Medicine.find({
    $or: payload.medicines.map((m) => ({ _id: m.medicine })),
  });
  if (isMedicineExists.length !== payload.medicines.length) {
    throw new AppError(404, "Medicine not found");
  }
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    let idx = 0;
  for (const medicine of isMedicineExists) {
    const payloadMedicine = payload.medicines[idx];
    const newStock = medicine.stock - Number(payloadMedicine.quantity);
    if (
      payloadMedicine.medicine.toString() === medicine._id.toString() &&
      newStock < 0
    ) {
      throw new AppError(400, `${medicine.name} is out of stock`);
    }
    await Medicine.findOneAndUpdate(medicine._id, { stock: newStock });
    idx += 1;
  }
  payload.customer = new Types.ObjectId(user._id);
  const result = await Order.create(payload);
  await session.commitTransaction()
  await session.endSession()
  return result;
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(500, "Could not Place order")
  }
  
};

const updateOrderStatus = async (status: TOrderStatus, orderId: string) => {
  const isOrderExists = await Order.findById(orderId);
  if (!isOrderExists) {
    throw new AppError(404, "Order not found");
  }
  if (!AllowedStatus[isOrderExists.status].includes(status)) {
    throw new AppError(402, `Order Cannot be updated to ${status}`);
  }

  const result = await Order.findByIdAndUpdate(
    orderId,
    { status },
    { new: true }
  );
  return result;
};

const getMyOrders = async(user:IReqUser)=>{
    const result = await Order.find({customer:user._id})
    return result
}

const getAllOrders = async(query:Record<string,unknown>)=>{
    const orderQuery = new QueryBuilder(Order.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields()
    const meta = await orderQuery.countTotal()
    const data = await orderQuery.modelQuery
    return {data, meta}
}

const cancelOrder = async(orderId:string, user:IReqUser)=>{
    const isOrderExists = await Order.findById(orderId)
    if(!isOrderExists){
        throw new AppError(404, "Order not found`")
    }
    if(isOrderExists.customer.toString() !== user._id.toString()){
        throw new AppError(403, "You are  not Authorized to cancel this order")
    }
    if(isOrderExists.status !== "pending"){
        throw new AppError(402, "Cannot Cancel order. Order already handled")
    }
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const result = await Order.findByIdAndDelete(orderId)
    if(result){
        for(const medicine of isOrderExists.medicines){
            await Medicine.findByIdAndUpdate(medicine.medicine, {
                $inc:{
                    stock: medicine.quantity
                }
            }, {new:true})
        }
    }
    await session.commitTransaction()
    await session.endSession()
    return result
        
    } catch (error) {
       await session.abortTransaction()
       await session.endSession()
       throw new AppError(500, "Could not cancel Order")
    }
    
}

export const OrdeServices = {
  placeOrder,
  updateOrderStatus,
  getMyOrders,
  getAllOrders,
  cancelOrder
};
