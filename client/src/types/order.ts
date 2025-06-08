import { IMedicine } from "./medicine";

export type IMedicines = {medicine:IMedicine| string, quantity:number}[]

export type TOrderStatus = "pending" | "processing" | "shipped" | "delivered" | "rejected"

export interface IOrder {
    _id:string;
    medicines: IMedicines;
    customer:string;
    paymentSession:string;
    status:TOrderStatus;
    totalPrice:number;
    prescription:string;
}