import { Request } from "express";
import { Document, Types } from "mongoose";
import { IUser } from "../modules/user/user.interface";

export interface ICustomRequest extends Request{
    user?: (Document<unknown, {}, IUser> & IUser & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null
}