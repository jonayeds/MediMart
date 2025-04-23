"use server"

export const getAllMedicines = async(query?:Record<string, unknown>)=>{
    const result = await fetch(`${process.env.SERVER_URL}/medicine`,{
        method:"GET",
    })
    const res = await result.json()
    return res
}