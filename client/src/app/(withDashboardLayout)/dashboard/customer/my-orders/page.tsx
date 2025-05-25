import { orderCols } from "@/components/dashboard/customer/OrderColumns"
import { DataTable } from "@/components/dashboard/DataTable"
import { getMyOrders } from "@/services/OrderService"

const MyOrdersPage = async() => {
    const {data:orders} = await getMyOrders()
  return (
    <div>
      <h1 className="text-center font-heading text-[4vw] mb-8 uppercase">My Orders</h1>
        <DataTable columns={orderCols} data={orders}/>
    </div>
  )
}

export default MyOrdersPage