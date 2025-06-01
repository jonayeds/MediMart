import { IMedicine } from "./medicine";
import { IOrder } from "./order";
import { IUser } from "./user";

export interface IReview {
    _id:string;
    review: string;
    rating: number;
    customer: IUser | string;
    order: IOrder;
    medicine: IMedicine;
}