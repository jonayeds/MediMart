import { Response } from "express";

type TResponse<T> = {
    statusCode:number;
    message:string;
    success:boolean;
    data:T
}


export const sendResponse = <T>(res:Response, data:TResponse<T>)=>{
    res.status(data?.statusCode).json({
        success:data.success,
        message:data.message,
        data:data.data
    })
}