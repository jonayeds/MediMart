"use client"
import { useAppSelector } from "@/redux/hooks"
import { Button } from "../ui/button"
import { selectCart } from "@/redux/features/cart/cartSlice"
import { placeOrder } from "@/services/OrderService"
import { toast } from "sonner"

const PlaceOrder = () => {
    const cart = useAppSelector(selectCart)
    const handlePlaceOrder = async()=>{
        const id = toast.loading("Placing order...")
        const medicines = cart.map(m=> ({medicine:m.medicine._id, quantity:m.quantity}))
        const order = {
            medicines,
        }
        console.log(order)
        const result = await placeOrder(order)
        console.log(result)
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