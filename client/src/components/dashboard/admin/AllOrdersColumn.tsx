"use client"



import { Button } from "@/components/ui/button"
import { updateOrderStatus } from "@/services/OrderService"
import { IOrder, TOrderStatus } from "@/types/order"
import { ColumnDef, Row } from "@tanstack/react-table"
import Image from "next/image"
import { toast } from "sonner"

export const allOrderCols : ColumnDef<IOrder>[] = [
    {
        accessorKey: "medicines",
        header: "Medicines",
        cell: ({ row }) => {
            
            return <MedicinesCol row={row} />
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status
            return (
                <span className={`px-2 py-1 rounded-md text-white ${status === "pending" ? "bg-yellow-500" : status === "processing" ? "bg-blue-500" : status === "shipped" ? "bg-green-500" : status === "delivered" ? "bg-purple-500" : "bg-red-500"}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            )
        }
    },
    {
        accessorKey: "totalPrice",
        header: "Total Price",
        cell: ({ row }) => `₹${row.original.totalPrice}`
    },
    {
        accessorKey: "payment",
        header: "Payment",
        cell: ({ row }) => {
            return <p className={`${row.original.paymentSession === "pending" ? 'bg-yellow-500':'bg-green-500'} flex p-1 w-max text-white rounded-sm`}>{row.original.paymentSession === "pending"? 'Pending': 'Paid'}</p>
        }
    },
    {
        accessorKey: "prescription",
        header: "Prescription",
        cell: ({ row }) => {
            const prescription = row.original.prescription
            if( !prescription) {
                return <span className="text-gray-500">No Prescription</span>
            }
            return (
                <a href={prescription} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Prescription
                </a>
            )
        }                      
    },
    {
        accessorKey: "action",
        header: ()=>{
            return <p className="text-center">Action</p>
        },
        cell: ({ row }) => {
           if(row.original.status === "pending"){
                return <div className="flex items-center justify-center gap-2">
                    <ActionCol orderId={row.original._id} status="rejected" title="Reject"  />
                    <ActionCol orderId={row.original._id} status="processing" title="Accept"  />
                </div>
           }
           if(row.original.status === "processing" ){
            return <ActionCol orderId={row.original._id} status="shipped" title="Ship"  />
           }
              if(row.original.status === "shipped" ){
                return <ActionCol orderId={row.original._id} status="delivered" title="Deliver"  />
              }
           
        }                      
    }
]



export const MedicinesCol = ({row}:{row:Row<IOrder>})=>{             
    return (<div className="flex flex-col gap-2">   
                {
                    row.original.medicines.map((med, index) => (
                <div key={med.medicine._id || `medicine-${index}`} className="flex items-center gap-2 ">
                    <Image
                        src={med.medicine.image || "https://images.pexels.com/photos/6653040/pexels-photo-6653040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                        alt={med.medicine.name || "Medicine Image"} 
                        width={50}
                        height={50}
                        className="rounded-full  w-8 h-8"
                    />
                    <p>
                    {med.medicine.name} ({med.quantity})
                    </p>
                </div>
            ))
                }
            </div>)
}


const ActionCol = ({orderId, status, title}:{orderId:string, status:TOrderStatus,title:string })=>{
    const handleUpdateStatus = async()=>{
        const id = toast.loading(`${title}ing Status...`)
        const result = await updateOrderStatus(orderId, status)
        if(result?.success){
            toast.success(`Order ${status} Successfully"`, {id})     
        }else{
            toast.error(`Could not ${title} order`, {id})   
        }        
    }    
    return (
        <div className="flex justify-center ">
            <Button onClick={handleUpdateStatus}>{title}</Button>
        </div>
    )               
}




