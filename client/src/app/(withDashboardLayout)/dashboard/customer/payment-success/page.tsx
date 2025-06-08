"use client";
import { verifyPayment } from "@/services/OrderService";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";
import { toast } from "sonner";

const PaymentSuccessPage = () => {
    const queryParams = useSearchParams()
    const sessionId = queryParams.get("session_id")
    const orderId = queryParams.get("order")   
    const router = useRouter()
    useEffect(()=>{
      if(sessionId && orderId){
      const verify = async()=>{
          const result = await verifyPayment(sessionId, orderId)  
          console.log("Payment Verification Result", result)  
          if(result.success){
            toast.success("Payment Successfull")  
            router.push('/dashboard/customer/my-orders') 
          }else{
            toast.error("Payment Failed")   
          }
        }
        verify()
      }
    },[orderId, sessionId, router])
    console.log("Payment Success Page", sessionId, orderId)  
  return (
    <div className="h-screen flex items-center justify-center">
        <p className="text-green-500 text-lg ">Payment Successfull</p>
    </div>
  )
}

export default PaymentSuccessPage