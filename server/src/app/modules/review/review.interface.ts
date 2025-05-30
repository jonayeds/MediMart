import { Types } from "mongoose";

export interface IReview {
    review: string;
    rating: number;
    customer: Types.ObjectId;
    order: Types.ObjectId;
    medicine: Types.ObjectId;
}