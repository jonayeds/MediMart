import { Router } from "express";
import { ReviewControllers } from "./review.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { ReviewValidations } from "./review.validations";
import { roles } from "../user/user.constant";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post(
  "/",
  validateRequest(ReviewValidations.createReviewValidation),
  ReviewControllers.createReview
);
router.get("/my-reviews", auth(roles.customer), ReviewControllers.getMyReviews);

export const ReviewRoutes = router;
