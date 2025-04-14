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

export const UserControllers = {
    registerUser
}