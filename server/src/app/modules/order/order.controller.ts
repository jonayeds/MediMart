import { IReqUser } from "../../interfaces";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { OrdeServices } from "./order.service";


const placeOrder = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.placeOrder(req.body, req.user as IReqUser)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully placed order"
    })
})


const updateOrderStatus = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.updateOrderStatus(req.body.status, req.params.orderId)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully Updated order status"
    })
})
export const OrderControllers = {
    placeOrder,
    updateOrderStatus
}