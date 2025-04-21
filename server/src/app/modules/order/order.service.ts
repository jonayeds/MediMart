import { Types } from "mongoose";
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
  return result;
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

export const OrdeServices = {
  placeOrder,
  updateOrderStatus,
  getMyOrders,
  getAllOrders
};
