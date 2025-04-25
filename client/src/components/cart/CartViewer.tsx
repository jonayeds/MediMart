"use client"

import { removeFromCart, selectCart, updateQuantity } from "@/redux/features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Button } from "../ui/button"

const CartViewer = ({isEditable}:{isEditable?:boolean}) => {
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    let totalPrice = 0
    cart.forEach(m=>{
        totalPrice += m.medicine.price * m.quantity
    })
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
            <p className="flex justify-end mr-4 text-2xl font-extralight ">Quantity</p>
        </div>
        <hr  className="border border-gray-400 my-2"/>
        {
            cart.map(product=> <div key={product.medicine._id} className=" hover:bg-[#d4d4d2] duration-100 px-4 py-3 rounded-lg grid grid-cols-2 mt-2
            " >
                <p className="flex items-center">{product.medicine.name}</p>
                <div className="flex items-center justify-end gap-2">
                {
                    isEditable && <Button size={"sm"} onClick={()=>handleQuantity(product.medicine._id, product.quantity-1)}>-</Button>
                }
                <p className={`${!isEditable ? 'mr-10':''}`}>{product.quantity}</p>
                {
                    isEditable && <Button size={"sm"} onClick={()=>handleQuantity(product.medicine._id, product.quantity+1)}>+</Button>
                }
                
                </div>
            </div>)
        }
        {
            (totalPrice >0 ) && <>
        <hr  className="border border-gray-300 my-2"/>
        <div className="grid grid-cols-2 px-3">
        <p className="text-xl font-light">Total</p>
        <p className="text-right text-2xl text-dark mr-6">$${totalPrice}</p>
        </div>
            </>
        }
      
       
    </div>
  )
}

export default CartViewer