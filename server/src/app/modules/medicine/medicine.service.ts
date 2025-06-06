
import QueryBuilder from "../../builder/QueryBuilder"
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

const getAllMedicine = async(query:Record<string,unknown>)=>{
    const searchableFields = ['name', 'category', 'symptoms' ]
    const medicineQuery = new QueryBuilder(Medicine.find(), query)
    .search(searchableFields)
    .fields()
    .sort()
    .filter()
    .paginate()
    .range("price")
    const meta =await  medicineQuery.countTotal()

     const result = await medicineQuery.modelQuery
     return {data:result, meta}
    
}
const getASingleMedicine = async(medicineId:string)=>{
    const result = await Medicine.findById(medicineId)
    return result
    
}

const deleteMedicine = async(medicineId:string)=>{
    const isMedicineExists = await Medicine.findById(medicineId)
    if(!isMedicineExists){
        throw new AppError(404, "Medicine not found")
    }
    const result = await Medicine.findByIdAndDelete(medicineId)
    return result
}

const updateMedicine = async(medicineId:string, payload:IMedicine)=>{
    const result = await Medicine.findByIdAndUpdate(medicineId, {
        ...payload
    },{new:true})
        if(!result){
        throw new AppError(404, "Medicine not found")
    }
    return result
}



export const MedicineServices = {
    createMedicine,
    getAllMedicine,
    deleteMedicine,
    updateMedicine,
    getASingleMedicine
}