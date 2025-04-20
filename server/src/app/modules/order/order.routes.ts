import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";
import { OrderControllers } from "./order.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { OrderValidations } from "./order.validation";

const router = Router()

router.post("/place-order", auth(roles.customer), validateRequest(OrderValidations.placeOrderValidation),  OrderControllers.placeOrder)

export const OrderRoutes = router