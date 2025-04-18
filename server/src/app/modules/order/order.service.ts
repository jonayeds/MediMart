import { IOrder } from "./order.interface"
import { Order } from "./order.model"

const placeOrder = async(payload:IOrder)=>{
    const result  = await Order.create(payload)
    return result
}

export const OrdeServices = {
    placeOrder
}