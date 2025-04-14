import config from "../../config";
import { AppError } from "../../utils/appError";
import { signJwt } from "../../utils/signJwt";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const registerUser = async(payload:IUser)=>{
    const isUserExists = await User.isUserExists({email:payload.email, phoneNumber:payload.phoneNumber})
    if(isUserExists){
        throw new AppError(400,  `User with same ${isUserExists.property} Already exists`)
    }
    const result = await User.create(payload)
    const jwtPayload = {
        email:result.email,
        phoneNumber:result.phoneNumber,
        role:result.role,
    }
    const accessToken = signJwt(jwtPayload,config.access_secret as string)
    
   return {data:result, accessToken}
}

export const UserServices = {
    registerUser
}