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

export const MedicineControllers = {
    createMedicine
}