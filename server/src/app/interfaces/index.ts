import { Request } from "express";
import { IUser } from "../modules/user/user.interface";

export interface IReqUser extends IUser{
    _id:string;
}

export interface ICustomRequest extends Request{
    user?: IReqUser | null
}

export type TErrorSource = {
    path: string | number;
    message:string;
}[]

export interface IGenericErrorResponse {
    statusCode:number;
    message:string;
    errorSources:TErrorSource
}
