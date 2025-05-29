import { AnyZodObject } from "zod";
import { catchAsync } from "../utils/catchAsync";

export const validateRequest = (zodSchema:AnyZodObject)=>{
    return catchAsync(async(req,res,next)=>{
        console.log(req.body)
        await zodSchema.parseAsync(req.body)
        next()
    })
}