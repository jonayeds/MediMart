import { z } from "zod";

const loginUserValidationSchema = z.object({
    identification:z.string(),
    password:z.string()
})

export const AuthValidations = {
    loginUserValidationSchema
}