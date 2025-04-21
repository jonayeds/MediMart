import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";
import { OrderControllers } from "./order.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { OrderValidations } from "./order.validation";

const router = Router()

router.post("/place-order", auth(roles.customer), validateRequest(OrderValidations.placeOrderValidation),  OrderControllers.placeOrder)
router.patch("/update-status/:orderId", auth(roles.admin), validateRequest(OrderValidations.updateOrderStatusValidationSchema), OrderControllers.updateOrderStatus)
export const OrderRoutes = router