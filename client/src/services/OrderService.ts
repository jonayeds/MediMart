"use server"
import { IOrder } from "@/types/order"
import { revalidateTag } from "next/cache"
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

export const getMyOrders = async()=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/my-orders`, {
        headers:{
            "Authorization": token as string,
            "Content-Type": "application/json"
        },
        method:"GET",
        next:{
            tags:["cancel-order"]
        }
    })
    const res = await result.json()
    return res  
}

export const getDeleveredOrders = async()=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/my-orders`, {
        headers:{
            "Authorization": token as string,
            "Content-Type": "application/json"
        },
        method:"GET",

    })
    const res = await result.json()
    return res 
}

export const cancelOrder =async(orderId:string)=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/cancel-order/${orderId}`, {
        headers:{
            "Authorization": token as string,
        },
        method:"DELETE"
    })
    revalidateTag("cancel-order")
    const res = await result.json()
    return res              
}

export const getAllOrders = async()=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/all-orders`, {
        headers:{
            "Authorization": token as string,
            "Content-Type": "application/json"
        },
        method:"GET",
        next:{
            tags:["updateStatus"]   
        }
    })
    const res = await result.json()
    return res              
}

export const updateOrderStatus = async(orderId:string, status:string)=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/update-status/${orderId}`, {
        headers:{
            "Authorization": token as string,
            "Content-Type": "application/json"
        },
        method:"PATCH",
        body:JSON.stringify({status})
    })
    revalidateTag("updateStatus")
    const res = await result.json()
    return res  
}

export const createPayment = async(order:IOrder)=>{
    const token = (await cookies()).get("accessToken")?.value
    const result = await fetch(`${process.env.SERVER_URL}/order/create-payment/${order._id}`, {
        headers:{
            "Authorization": token as string,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(order),
        method:"POST"
    })
    const res = await result.json()
    return res  
}