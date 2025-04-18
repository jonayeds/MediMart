import { Types } from "mongoose";

export interface IMedicines {medicine:Types.ObjectId, quantity:number}

export interface IOrder {
    medicines: IMedicines[];
    customer:Types.ObjectId;
    paymentSession:string;
    status:"pending" | "processing" | "shipped" | "delivered";
    prescription:string;
}