"use client";
import { useSearchParams } from "next/navigation"

const PaymentSuccessPage = () => {
    const queryParams = useSearchParams()
    const sessionId = queryParams.get("session_id")
    const orderId = queryParams.get("order")   
    console.log("Payment Success Page", sessionId, orderId)  
  return (
    <div className="h-screen flex items-center justify-center">
        <p className="text-green-500 text-lg ">Payment Successfull</p>
    </div>
  )
}

export default PaymentSuccessPage