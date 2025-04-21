import jwt, { SignOptions } from "jsonwebtoken"
export type TJwtPayload = {
    phoneNumber:string;
    email:string;
    role:"customer"| "admin"
}

export const signJwt  = (jwtPayload:TJwtPayload, secret:string, expiresIn:SignOptions["expiresIn"] = "10d")=>{
    const token =  jwt.sign(jwtPayload,secret, {
        expiresIn
    })
    return token
}