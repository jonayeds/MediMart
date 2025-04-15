import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthValidations } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";



const router = Router()

router.post("/login", validateRequest(AuthValidations.loginUserValidationSchema), AuthControllers.loginUser)

export const AuthRoutes = router