import { Types } from "mongoose"
import { Medicine } from "../medicine/medicine.model"
import { IReview } from "./review.interface"
import { Review } from "./review.model"

const createReview = async (reviewData:IReview, userId:Types.ObjectId) => {
    const isMedicineExists = await Medicine.findById(reviewData.medicine)
    if (!isMedicineExists) {
        throw new Error("Medicine not found")
    }
    reviewData.customer = userId    


    const result =await Review.create(reviewData)
    return result
}

const getMyReviews = async(customerId:string)=>{
    const result = await Review.find({customer: customerId})    
    return result
}

export const ReviewServices = {
    createReview,
    getMyReviews
}