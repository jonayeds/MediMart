import { Router } from "express";
import { ReviewControllers } from "./review.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { ReviewValidations } from "./review.validations";

const router = Router()

router.post("/", validateRequest(ReviewValidations.createReviewValidation), ReviewControllers.createReview)

export const ReviewRoutes = router;