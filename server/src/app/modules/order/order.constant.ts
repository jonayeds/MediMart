import { TOrderStatus } from "./order.interface"

export const OrderStatus = ["pending", "processing", "shipped", "delivered", "rejected"]

export const AllowedStatus : Record<TOrderStatus , TOrderStatus[]> = {
    pending:["processing", "rejected"],
    processing:['shipped'],
    shipped:["delivered"],
    delivered:[],
    rejected:[]
}
