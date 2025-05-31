import { z } from "zod";

const createReviewValidation = z.object({
    review: z.string().min(1, "Review cannot be empty"),
    rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    medicine: z.string().min(1, "Medicine ID is required"),         
    order: z.string().min(1, "Order ID is required"),
})


export const ReviewValidations = {
    createReviewValidation,
}