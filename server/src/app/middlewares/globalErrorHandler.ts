import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSource } from "../interfaces";
import { handleMongooseValidationErrror } from "../errors/handleMongooseValidationError";
import { AppError } from "../utils/appError";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err?.message || "Something went wrong";
  let errorSources: TErrorSource = [
    { path: "", message: "Something went wrong" },
  ];
  if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";
    errorSources = err.issues.map((issue) => ({
      message: issue.message,
      path: issue.path[issue.path.length - 1],
    }));
  }
  else if(err?.name === "ValidationError"){
    const simplifiedError = handleMongooseValidationErrror(err)
    message = simplifiedError.message
    errorSources = simplifiedError.errorSources
    statusCode= simplifiedError.statusCode
  }
  else if(err?.name === "CastError"){
    message = "Invalid ID"
    statusCode = 401
    errorSources = [{path:err.path, message:err.message}]
  }
  else if(err?.code === 11000){
    message = "Duplicate Error"
    statusCode = 401
    errorSources = Object.keys(err.keyValue).map(key => ({path:key, message:`${key}: '${err.keyValue[key]}' already exists`}))
  }else if(err instanceof AppError){
    statusCode = err.statusCode
    message =err.message
    errorSources = [{
      path:"",
      message:err.message
    }]
  } else if(err instanceof Error){
    message =err.message
    errorSources = [{
      path:"",
      message:err.message
    }]
  } 
  
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};
