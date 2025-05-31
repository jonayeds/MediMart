import { Medicine } from "../medicine/medicine.model"
import { IReview } from "./review.interface"
import { Review } from "./review.model"

const createReview = async (reviewData:IReview) => {
    const isMedicineExists = await Medicine.findById(reviewData.medicine)
    if (!isMedicineExists) {
        throw new Error("Medicine not found")
    }                       
    const result =await Review.create(reviewData)
    return result
}

export const ReviewServices = {
    createReview,
}