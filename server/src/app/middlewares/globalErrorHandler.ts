import { ErrorRequestHandler } from "express";


export  const errorHandler:ErrorRequestHandler = (err, req, res, next)=>{
    let statusCode = 500;
    let message =err?.message || "Something went wrong"
    res.status(statusCode).json({
        success:false,
        message,
        error:err
    })
}