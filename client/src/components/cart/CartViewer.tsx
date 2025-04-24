"use client"

import { removeFromCart, selectCart, updateQuantity } from "@/redux/features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Button } from "../ui/button"

const CartViewer = () => {
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    const handleQuantity = (medicineId:string,quantity:number)=>{
        if(quantity < 1){
            dispatch(removeFromCart(medicineId))
        }else{
            dispatch(updateQuantity({medicineId, quantity}))
        }
    }
  return (
    <div className="max-w-md mx-auto mt-12">
        <div className="grid grid-cols-2">
            <p className="text-2xl font-extralight">Medicine</p>
            <p className="flex justify-center text-2xl font-extralight">Quantity</p>
        </div>
        <hr  className="border border-gray-400 my-2"/>
        {
            cart.map(product=> <div key={product.medicine._id} className=" hover:bg-[#d4d4d2] duration-100 px-4 py-3 rounded-lg grid grid-cols-2 mt-2
            " >
                <p className="flex items-center">{product.medicine.name}</p>
                <div className="flex items-center justify-center gap-2">
                <Button size={"sm"} onClick={()=>handleQuantity(product.medicine._id, product.quantity+1)}>+</Button>
                <p className="">{product.quantity}</p>
                <Button size={"sm"} onClick={()=>handleQuantity(product.medicine._id, product.quantity-1)}>-</Button>
                </div>
            </div>)
        }
    </div>
  )
}

export default CartViewer