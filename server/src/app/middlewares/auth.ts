import config from "../config";
import { IReqUser } from "../interfaces";
import { IUser, TUserRole } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import { AppError } from "../utils/appError";
import { catchAsync } from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken"
export const auth = (...requiredRoles:TUserRole[])=>{
    return catchAsync(async(req, res, next)=>{
        const token = req.headers.authorization
        if(!token){
            throw new AppError(403,"You are not Authorized")
        } 
        jwt.verify(token, config.access_secret as string, async(err, decoded)=>{
            if(err){
                throw new AppError(403,"You are not Authorized")
            }
            const {role, email} = decoded as JwtPayload
            if(requiredRoles && !requiredRoles.includes(role)){
                throw new AppError(403, "You are not authorized")
            }

            const user = await User.findOne({email})
            if(!user){
                throw new AppError(403,"You are not authorized");
            }
            req.user = user as unknown as IReqUser
            next()
        })

    })
}