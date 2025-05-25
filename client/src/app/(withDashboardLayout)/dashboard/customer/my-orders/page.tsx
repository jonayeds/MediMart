import { orderCols } from "@/components/dashboard/customer/OrderColumns"
import { DataTable } from "@/components/dashboard/DataTable"
import { getMyOrders } from "@/services/OrderService"

const MyOrdersPage = async() => {
    const {data:orders} = await getMyOrders()
  return (
    <div>
        <DataTable columns={orderCols} data={orders}/>
    </div>
  )
}

export default MyOrdersPage