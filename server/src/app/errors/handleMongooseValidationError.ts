import mongoose from "mongoose";
import { IGenericErrorResponse, TErrorSource } from "../interfaces";

export const handleMongooseValidationErrror = (err:mongoose.Error.ValidationError) :IGenericErrorResponse =>{
    const errorSources:TErrorSource = Object.values(err.errors).map((val)=>({message:val.message, path:val.path}))
    return {
        errorSources,
        statusCode:400,
        message:"Validation Error"
    }
}