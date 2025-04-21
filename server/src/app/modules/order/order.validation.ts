import { z } from "zod";
import { OrderStatus } from "./order.constant";
import { TOrderStatus } from "./order.interface";

const medicinesValidationSchema = z.object({
  medicine: z.string().min(1, { message: "Medicine ID is required" }), // Ensure medicine ID is a valid string
  quantity: z.number().int().min(1, { message: "Quantity must be at least 1" }), // Quantity must be a positive integer
});

const placeOrderValidation = z.object({
  medicines: z
    .array(medicinesValidationSchema)
    .min(1, { message: "At least one medicine is required" }), // Array of medicines, must contain at least one
  paymentSession: z.string().optional(), // Payment session is optional
  prescription: z.string().optional(), // Prescription is optional
});

const updateOrderStatusValidationSchema = z.object({
  status: z.enum(OrderStatus as [TOrderStatus, ...TOrderStatus[]], {message:"Invalid Order status"})
})

export const OrderValidations = {
  placeOrderValidation,
  updateOrderStatusValidationSchema
};
