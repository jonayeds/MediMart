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

const getMyOrders = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.getMyOrders(req.user as IReqUser, req.query)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully Fetched my orders"
    })
})
const getAllOrders = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.getAllOrders(req.query)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully Fetched all orders"
    })
})
const cancelOrder = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.cancelOrder(req.params.orderId, req.user as IReqUser)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully Cancelled Order"
    })
})
const createPayment = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.createPayment(req.body,req.user as IReqUser,req.params.orderId)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully created Payment"
    })
})
const verifyPayment = catchAsync(async(req,res)=>{
    const result  = await OrdeServices.verifyPayment(req.body.paymentSession)
    sendResponse(res,{
        data:result,
        success:true,
        statusCode:200,
        message:"Successfully Verified Payment"
    })
})
export const OrderControllers = {
    placeOrder,
    updateOrderStatus,
    getMyOrders,
    getAllOrders,
    cancelOrder,
    createPayment,
    verifyPayment
}