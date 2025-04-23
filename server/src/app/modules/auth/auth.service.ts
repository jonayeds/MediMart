import config from "../../config";
import { AppError } from "../../utils/appError";
import { signJwt } from "../../utils/signJwt";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";

const loginUser = async(payload:IAuth)=>{
    const isUserExists = await User.isUserExists({identification:payload.identification})
    if(!isUserExists){
        throw new AppError(404, "User not found")
    }
    const isPasswordCorrect = await User.isPasswordCorrect( payload.password ,isUserExists.user.password)
    if(!isPasswordCorrect){
        throw new AppError(400, "Wrong password")
    }
    const jwtPayload = {
        email:isUserExists.user.email,
        phoneNumber:isUserExists.user.phoneNumber,
        role:isUserExists.user.role
    }
    const accessToken  =  signJwt(jwtPayload, config.access_secret as string)
    return {accessToken, data:isUserExists.user}
}

export const AuthServices = {
    loginUser
}