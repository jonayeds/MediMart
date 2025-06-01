import { allOrderCols } from "@/components/dashboard/admin/AllOrdersColumn"
import { DataTable } from "@/components/dashboard/DataTable"
import { getAllOrders } from "@/services/OrderService"


const AllOrdersPage = async() => {
    const {data:allOrders} = await getAllOrders()
    if(!allOrders){
        return <div className="text-center text-red-500">No Orders Found</div>
    }
  return (
    <div>
        <h1 className="text-center font-heading text-[4vw] mb-8 uppercase">All Orders</h1>
        <DataTable columns={allOrderCols} data={allOrders.data}/>
    </div>
  )
}

export default AllOrdersPage