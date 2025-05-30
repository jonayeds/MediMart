import { model, Schema } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>({
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    medicine: {
        type: Schema.Types.ObjectId,
        ref: "Medicine",
        required: true,     
    }
},{
    timestamps:true
})

export const Review = model<IReview>("Review", reviewSchema)