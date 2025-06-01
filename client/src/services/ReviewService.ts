"use server"

import { cookies } from "next/headers"

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