import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ReviewServices } from "./review.service";

const createReview = catchAsync(async(req,res)=>{
    const reviewData = req.body;
    const result = await ReviewServices.createReview(reviewData);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Review created successfully",
        data: result    
    })
})
const getMyReviews = catchAsync(async(req,res)=>{
    const result = await ReviewServices.getMyReviews(req.user?._id as string);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "Fetched My Reviews successfully",
        data: result    
    })
})

export const ReviewControllers = {
    createReview,
    getMyReviews
}