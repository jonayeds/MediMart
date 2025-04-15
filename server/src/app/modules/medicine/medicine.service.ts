import { IReqUser } from "../../interfaces"
import { IUser } from "../user/user.interface"
import { IMedicine } from "./medicine.interface"
import { Medicine } from "./medicine.model"

const createMedicine = async(payload:IMedicine, user:IReqUser)=>{
    console.log(user)
    // const result = await Medicine.create(payload)
    return "Ehhhh"
}

export const MedicineServices = {
    createMedicine
}