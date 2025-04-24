"use client"

import { selectCart } from "@/redux/features/cart/cartSlice"
import { useAppSelector } from "@/redux/hooks"

const CartViewer = () => {
    const cart = useAppSelector(selectCart)
  return (
    <div>
        {
            cart.map(product=> <div key={product.medicine._id} >
                <p>{product.medicine.name}</p>
                <p>{product.medicine.price}</p>
            </div>)
        }
    </div>
  )
}

export default CartViewer