"use server"

import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const registerUser = async(payload:FieldValues)=>{
    try {
        const result = await fetch(`${process.env.SERVER_URL}/user/register`,{
            body:JSON.stringify(payload),
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res = await result.json()
        if(res.success){
            (await cookies()).set("accessToken", res.data.accessToken)
        }
        return res
    } catch (error) {
        console.log(error)
    }
}
export const loginUser = async(payload:FieldValues)=>{
    try {
        const result = await fetch(`${process.env.SERVER_URL}/auth/login`,{
            body:JSON.stringify(payload),
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res = await result.json()
        if(res.success){
            (await cookies()).set("accessToken", res.data.accessToken)
        }
        return res
    } catch (error) {
        console.log(error)
    }
}