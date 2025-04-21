import { Types } from "mongoose";

export interface IMedicines {medicine:Types.ObjectId, quantity:number}

export type TOrderStatus = "pending" | "processing" | "shipped" | "delivered" | "rejected"

export interface IOrder {
    medicines: IMedicines[];
    customer:Types.ObjectId;
    paymentSession:string;
    status:TOrderStatus;
    totalPrice:number;
    prescription:string;
}