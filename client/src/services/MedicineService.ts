"use server"

import { cookies } from "next/headers"
import {revalidateTag} from 'next/cache'
import { FieldValues } from "react-hook-form"

export const getAllMedicines = async(query:Record<string, unknown> ={})=>{
    const queryString = Object.keys(query).map(q=>`${q}=${query[q]}`).join("&")
    console.log("String: ", queryString)
    const result = await fetch(`${process.env.SERVER_URL}/medicine/?${queryString}`,{
        method:"GET",
        next:{
            tags:['update-stock']
        }
    })
    const res = await result.json()
    return res
}
export const getASingleMedicine = async(medicineId:string)=>{
    const result = await fetch(`${process.env.SERVER_URL}/medicine/${medicineId}`,{
        method:"GET",
    })
    const res = await result.json()
    return res
}

export const updateMedicineStock = async(medicineId:string, stock:number)=>{
    const token = (await cookies()).get("accessToken")?.value

    const result = await fetch(`${process.env.SERVER_URL}/medicine/${medicineId}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }, 
        body: JSON.stringify({stock}),  
    })
    revalidateTag("update-stock")
    const res = await result.json()
    return res      
}

export const createMedicine = async(payload:FieldValues)=>{
    const token = (await cookies()).get("accessToken")?.value

    const result = await fetch(`${process.env.SERVER_URL}/medicine`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }, 
        body: JSON.stringify(payload),  
    })
    const res = await result.json()
    return res      
}