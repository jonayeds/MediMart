import { IUser } from "./user.interface";

const registerUser = async(payload:IUser)=>{
    console.log(payload)
   return "res"
}

export const UserServices = {
    registerUser
}