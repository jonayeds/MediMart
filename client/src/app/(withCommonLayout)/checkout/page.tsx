import CartViewer from "@/components/cart/CartViewer"
import PlaceOrder from "@/components/checkout/MakePayment"

const CheckoutPage = () => {

  return (
    <div className=" container px-4 pt-20 mx-auto">
        <h1 className="md:text-[5vw] text-[8vw] font-heading text-center">Checkout</h1>
        <CartViewer isEditable={false}/>
            <PlaceOrder/>

    </div>
  )
}

export default CheckoutPage