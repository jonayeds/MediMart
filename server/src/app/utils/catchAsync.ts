import { NextFunction,   Response } from "express"
import { ICustomRequest } from "../interfaces"

export type RequestHandler = (
    req: ICustomRequest,  
    res: Response,
    next: NextFunction
  ) => void;

export const catchAsync = (fn:RequestHandler)=>{
    return (req:ICustomRequest, res:Response, next:NextFunction) =>{
        Promise.resolve(fn(req,res,next)).catch(err=>next(err))
    }
}