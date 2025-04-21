import { IReqUser } from "../../interfaces";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const registerUser = catchAsync(async (req, res)=>{
    const result = await UserServices.registerUser(req.body)
    res.cookie("accessToken", result.accessToken)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Registration Successfull",
        data:result
    })
})

const updateUser = catchAsync(async (req, res)=>{
    const result = await UserServices.updateProfile(req.body, req.user as IReqUser)
    res.cookie("accessToken", result.accessToken)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Profile updated Successfully",
        data:result
    })
})

const getMe = catchAsync(async (req, res)=>{
    const result = req.user
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Successfully fetched my profile",
        data:result
    })
})

export const UserControllers = {
    registerUser,
    updateUser,
    getMe
}