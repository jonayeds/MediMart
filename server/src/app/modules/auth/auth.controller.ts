import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async(req,res)=>{
    const result = await AuthServices.loginUser(req.body)
    res.cookie("accessToken",result.accessToken)
    sendResponse(res,{
        statusCode:200,
        message:"Login Successfull",
        data:result,
        success:true
    })
})

export const AuthControllers = {
    loginUser
}