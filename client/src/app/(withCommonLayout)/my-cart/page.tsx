import CartViewer from "@/components/cart/CartViewer"

const CartPage = () => {
  return (
    <div className=" container px-4 pt-20 mx-auto">
        <h1 className="md:text-[5vw] text-[8vw] font-heading text-center">My Cart</h1>
        <div>
            <CartViewer/>
        </div>
    </div>
  )
}

export default CartPage