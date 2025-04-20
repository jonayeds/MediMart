import { Types } from "mongoose"
import { IReqUser } from "../../interfaces"
import { AppError } from "../../utils/appError"
import { Medicine } from "../medicine/medicine.model"
import { IOrder } from "./order.interface"
import { Order } from "./order.model"

const placeOrder = async(payload:IOrder, user:IReqUser)=>{
    const isMedicineExists = await Medicine.find({
        $or: payload.medicines.map(m=> ({_id: m.medicine}))
    })
    if(isMedicineExists.length  !== payload.medicines.length){
        throw new AppError(404, "Medicine not found")
    }
    let idx=0
    for(const medicine of isMedicineExists){
        const payloadMedicine = payload.medicines[idx]
        const newStock = medicine.stock - Number(payloadMedicine.quantity)
        if((payloadMedicine.medicine.toString() === medicine._id.toString()) && ( newStock <0 )){
            throw new AppError(400, `${medicine.name} is out of stock`)
        }
        await Medicine.findOneAndUpdate(medicine._id, {stock : newStock})
        idx == idx++
    }
    payload.customer = new Types.ObjectId(user._id)
    const result  = await Order.create(payload)
    return result
}

export const OrdeServices = {
    placeOrder
}