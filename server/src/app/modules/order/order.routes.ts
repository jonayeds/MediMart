import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";
import { OrderControllers } from "./order.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { OrderValidations } from "./order.validation";

const router = Router()

router.post("/place-order", auth(roles.customer), validateRequest(OrderValidations.placeOrderValidation),  OrderControllers.placeOrder)
router.patch("/update-status/:orderId", auth(roles.admin), validateRequest(OrderValidations.updateOrderStatusValidationSchema), OrderControllers.updateOrderStatus)
router.get("/my-orders", auth(roles.customer), OrderControllers.getMyOrders)
router.get("/all-orders", auth(roles.admin), OrderControllers.getAllOrders)
router.delete("/cancel-order/:orderId", auth(roles.customer), OrderControllers.cancelOrder)
router.post("/create-payment/:orderId", auth(roles.customer), OrderControllers.createPayment)
router.post("/verify-payment", auth(roles.customer), OrderControllers.verifyPayment)
export const OrderRoutes = router   