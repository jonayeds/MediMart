"use server"

import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const getMyReviews = async()=>{
    const token = (await cookies()).get("accessToken")?.value
    const res = await fetch(`${process.env.SERVER_URL}/review/my-reviews`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`
        }   
    })
    const data =  await res.json()
    return data   
}

export const createReview = async(payload:FieldValues)=>{
    const token = (await cookies()).get("accessToken")?.value
    const res = await fetch(`${process.env.SERVER_URL}/review/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`
        },
        body: JSON.stringify(payload)
    })
    const data = await res.json()
    return data         
}