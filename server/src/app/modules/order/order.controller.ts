import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { OrdeServices } from "./order.service";


const placeOrder = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.placeOrder(req.body)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully placed order"
    })
})

export const OrderControllers = {
    placeOrder
}