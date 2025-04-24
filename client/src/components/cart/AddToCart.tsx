"use client"
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button"
import { MdAddShoppingCart as CartIcon } from "react-icons/md";
import { IMedicine } from "@/types/medicine";
import { addToCart } from "@/redux/features/cart/cartSlice";
const AddtoCart = ({medicine}:{medicine:IMedicine}) => {
    const dispatch = useAppDispatch()
    const handleAddToCart = ()=>{
        dispatch(addToCart({medicine, quantity:1}))
    }
  return (
    <Button variant={"outline"} className="hover:text-white hover:bg-[#1A2B13]" onClick={handleAddToCart}>Add to Cart <CartIcon/> </Button>
  )
}

export default AddtoCart