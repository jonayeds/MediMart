"use server"
import { IOrder } from "@/types/order"
import { cookies } from "next/headers"

export const placeOrder = async(payload:Partial<IOrder>)=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/place-order`, {
        headers:{
            "Authorization": token as string,
            "Content-Type": "application/json"
        },
        method:"POST",
        body:JSON.stringify(payload)
    })
    const res = await result.json()
    return res
}