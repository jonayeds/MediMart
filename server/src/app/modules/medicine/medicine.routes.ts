import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";
import { validateRequest } from "../../middlewares/validateRequest";
import { MediciveValidations } from "./medicine.validation";
import { MedicineControllers } from "./medicine.controller";

const router = Router()

router.post("/", auth(roles.admin), validateRequest(MediciveValidations.createMedicineValidationSchema), MedicineControllers.createMedicine )
router.get("/", MedicineControllers.getAllMedicine)
router.delete("/:medicineId", auth(roles.admin), MedicineControllers.deleteMedicine)

export const MedicineRoutes = router