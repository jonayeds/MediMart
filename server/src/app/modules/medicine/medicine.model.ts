import { model, Schema } from "mongoose";
import { IMedicine } from "./medicine.interface";
import  { MedicineCategories } from "./medicine.constant";

const medicineSchema = new Schema<IMedicine>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        enum:MedicineCategories,
    },
    expiryDate:{
        type:Date,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    symptoms:{
        type:[String],
        required:true
    },
    prescriptionRequired:{
        type:Boolean,
        required:true
    },
},{timestamps:true})

export const Medicine = model<IMedicine>("Medicine", medicineSchema)