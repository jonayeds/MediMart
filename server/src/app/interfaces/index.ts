import { Request } from "express";
import { IUser } from "../modules/user/user.interface";

export interface IReqUser extends IUser{
    _id:string;
}

export interface ICustomRequest extends Request{
    user?: IReqUser | null
}