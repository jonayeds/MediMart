import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";
import { OrderControllers } from "./order.controller";

const router = Router()

router.post("/place-order", auth(roles.customer), OrderControllers.placeOrder)

export const OrderRoutes = router