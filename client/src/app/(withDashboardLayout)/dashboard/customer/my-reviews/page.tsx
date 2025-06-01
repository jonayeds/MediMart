import { getMyOrders } from "@/services/OrderService"


const MyReviewsPage = async() => {
    const {data: orders} = await getMyOrders()
  return (
    <div className="">
        <h1 className="text-center font-heading text-[4vw] mb-8 uppercase">My Reviews</h1>
        <div className="h-full">
            {
                orders.length > 0 ? <>v</>: <p className="text-center">No orders Delivered yet...</p>
            }
        </div>
    </div>
  )
}

export default MyReviewsPage