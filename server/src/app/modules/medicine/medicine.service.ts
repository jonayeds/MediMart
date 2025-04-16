
import { AppError } from "../../utils/appError"
import { IMedicine } from "./medicine.interface"
import { Medicine } from "./medicine.model"

const createMedicine = async(payload:IMedicine)=>{
    const expiry = new Date(payload.expiryDate)
    const isMedicineExists = await Medicine.findOne({name:payload.name, manufacturer:payload.manufacturer, expiryDate:expiry})
    if(isMedicineExists){
        throw new AppError(401, "Medicine Already Exists")
    }
    const result = await Medicine.create({...payload, expiryDate:expiry})
    return result
}

export const MedicineServices = {
    createMedicine
}