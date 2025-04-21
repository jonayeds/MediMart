import { z } from "zod";

const registerUserValidationSchema = z.object({
    name:z.string().max(25, {message:"Name cannot be longer than 25 characters"}),
    email:z.string().email({message:"Invalid email"}),
    phoneNumber:z.string().regex(/^[0-9]+$/, {message:"Phone Number can only contain digits"}),
    password:z.string({message:"Password is required"}),
    profileImage:z.string().optional()
})
const updateUserValidationSchema = z.object({
    name:z.string().max(25, {message:"Name cannot be longer than 25 characters"}).optional(),
    email:z.string().email({message:"Invalid email"}).optional(),
    phoneNumber:z.string().regex(/^[0-9]+$/, {message:"Phone Number can only contain digits"}).optional(),
    password:z.string({message:"Password is required"}).optional(),
    profileImage:z.string().optional()
})

export const UserValidations = {
    registerUserValidationSchema,
    updateUserValidationSchema
}