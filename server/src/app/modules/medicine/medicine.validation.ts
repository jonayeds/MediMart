import { z } from "zod";
import { MedicineCategories } from "./medicine.constant";

const validateDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
    return date;
  };

const createMedicineValidationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),  // Ensure the name is a non-empty string
    description: z.string().optional(),  // Optional field for description
    category: z.enum([...MedicineCategories] as [string, ...string[]], { message: "Invalid category" }),  // Enum validation for category
    expiryDate: z.string()
    .refine(val => !isNaN(new Date(val).getTime()), { message: "Invalid date string" })  // Ensure valid date format
    .transform(validateDate)  // Convert to Date object
    .refine((val) => val > new Date(), { message: "Expiry date must be in the future" }),   // Ensure expiry date is in the future
    manufacturer: z.string().min(1, { message: "Manufacturer is required" }),  // Assuming manufacturer is a string ID (ObjectId as string)
    price: z.number().min(0, { message: "Price must be a positive number" }),  // Price should be a positive number
    stock: z.number().int().min(0, { message: "Stock must be a non-negative integer" }),  // Stock should be a non-negative integer
    symptoms: z.array(z.string()).min(1, { message: "At least one symptom is required" }),  // At least one symptom is required
    prescriptionRequired: z.boolean(),  // Boolean value for prescriptionRequired
  });


export const  MediciveValidations ={
    createMedicineValidationSchema
}