import CartViewer from "@/components/cart/CartViewer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CartPage = () => {
  return (
    <div className=" container px-4 pt-20 mx-auto">
        <h1 className="md:text-[5vw] text-[8vw] font-heading text-center">My Cart</h1>
        <div>
            <CartViewer isEditable={true}/>
        </div>

            <Link href={"/checkout"} className="flex justify-center mt-8">
            <Button>Order now</Button>
        </Link>
    </div>
  )
}

export default CartPage