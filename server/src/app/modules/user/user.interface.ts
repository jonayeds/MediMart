import { Model } from "mongoose";

export interface IUser {
    name:string;
    email:string;
    password:string;
    phoneNumber:string;
    profileImage:string;
    role: "customer" | "admin";
    address:string
}

export type TUserRole = "customer" | "admin"

export interface IUserModel extends Model<IUser>{
    isUserExists({email, phoneNumber, identification}:{email?:string, phoneNumber?:string,identification?:string}) : Promise<{user:IUser & {_id:string}, property:string} | null>;
    isPasswordCorrect(plainTextPassword:string, hashedPassword:string):Promise<boolean>
}