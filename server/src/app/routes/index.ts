import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";


const router = Router()

const moduleRoutes = [
    {
        path:"/user",
        routes:UserRoutes
    }
]


moduleRoutes.forEach(route=> router.use(route.path, route.routes))

export default router