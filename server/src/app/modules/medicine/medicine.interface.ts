
import { TMedicineCategory } from "./medicine.constant";

export interface IMedicine{
    name:string;
    description:string;
    price:number;
    stock:number;
    prescriptionRequired:boolean;
    manufacturer:string;
    expiryDate:Date;
    category:TMedicineCategory;
    symptoms:string[];
}