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
