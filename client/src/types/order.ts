export interface IMedicines {medicine:string, quantity:number}

export type TOrderStatus = "pending" | "processing" | "shipped" | "delivered" | "rejected"

export interface IOrder {
    medicines: IMedicines[];
    customer:string;
    paymentSession:string;
    status:TOrderStatus;
    totalPrice:number;
    prescription:string;
}