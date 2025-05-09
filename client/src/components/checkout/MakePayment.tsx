"use client"
import { useAppSelector } from "@/redux/hooks"
import { Button } from "../ui/button"
import { selectCart } from "@/redux/features/cart/cartSlice"
import { placeOrder } from "@/services/OrderService"
import { toast } from "sonner"

const PlaceOrder = () => {
    const id = toast.loading("Placing order...")
    const cart = useAppSelector(selectCart)
    const medicines = cart.map(m=> ({medicine:m.medicine._id, quantity:m.quantity}))
    const handlePlaceOrder = async()=>{
        const order = {
            medicines,
        }
        const result = await placeOrder(order)
        if(result.success){
            toast.success(result.message, {id})
        }else{
            toast.error(result?.errorSources[0]?.message, {id})
        }

    }
  return (
    <div className="flex justify-center">
    <Button  onClick={handlePlaceOrder}  className=" mt-8">Pay Now</Button>
    </div>
  )
}

export default PlaceOrder