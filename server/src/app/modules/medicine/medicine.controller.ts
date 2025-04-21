import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { MedicineServices } from "./medicine.service";

const createMedicine = catchAsync(async(req,res)=>{
    const result = await MedicineServices.createMedicine(req.body)
    sendResponse(res,{
        success:true,
        message:"Successfully created Medicine",
        statusCode:200,
        data:result
    })
})

const getAllMedicine = catchAsync(async(req,res)=>{
    const result = await MedicineServices.getAllMedicine(req.query)
    sendResponse(res,{
        success:true,
        message:"Successfully Fetched All Medicine",
        statusCode:200,
        data:result
    })
})
const deleteMedicine = catchAsync(async(req,res)=>{
    const result = await MedicineServices.deleteMedicine(req.params.medicineId)
    sendResponse(res,{
        success:true,
        message:"Successfully Deleted Medicine",
        statusCode:200,
        data:result
    })
})

const updateMedicine = catchAsync(async(req,res)=>{
    const result = await MedicineServices.updateMedicine(req.params.medicineId, req.body)
    sendResponse(res,{
        success:true,
        message:"Successfully Updated Medicine",
        statusCode:200,
        data:result
    })
})

export const MedicineControllers = {
    createMedicine,
    getAllMedicine,
    deleteMedicine,
    updateMedicine
}