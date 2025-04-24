"use server"

export const getAllMedicines = async(query:Record<string, unknown> ={})=>{
    const queryString = Object.keys(query).map(q=>`${q}=${query[q]}`).join("&")
    console.log("String: ", queryString)
    const result = await fetch(`${process.env.SERVER_URL}/medicine/?${queryString}`,{
        method:"GET",
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