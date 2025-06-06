import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { MedicineRoutes } from "../modules/medicine/medicine.routes";
import { OrderRoutes } from "../modules/order/order.routes";
import { ReviewRoutes } from "../modules/review/review.routes";


const router = Router()

const moduleRoutes = [
    {
        path:"/user",
        routes:UserRoutes
    },
    {
        path:"/auth",
        routes:AuthRoutes
    },
    {
        path:"/medicine",
        routes:MedicineRoutes
    },
    {
        path:"/order",
        routes:OrderRoutes
    },
    {
        path:"/review",
        routes:ReviewRoutes
    },
]


moduleRoutes.forEach(route=> router.use(route.path, route.routes))

export default router