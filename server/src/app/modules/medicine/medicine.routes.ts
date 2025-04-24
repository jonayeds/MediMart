import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { roles } from "../user/user.constant";
import { validateRequest } from "../../middlewares/validateRequest";
import { MediciveValidations } from "./medicine.validation";
import { MedicineControllers } from "./medicine.controller";

const router = Router()

router.post("/", auth(roles.admin), validateRequest(MediciveValidations.createMedicineValidationSchema), MedicineControllers.createMedicine )
router.get("/", MedicineControllers.getAllMedicine)
router.get("/:medicineId", MedicineControllers.getASingleMedicine)
router.delete("/:medicineId", auth(roles.admin), MedicineControllers.deleteMedicine)
router.patch("/:medicineId", auth(roles.admin),validateRequest(MediciveValidations.updateMedicineValidationSchema), MedicineControllers.updateMedicine)
export const MedicineRoutes = router