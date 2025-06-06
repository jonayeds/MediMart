"use client"



import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { updateMedicineStock } from "@/services/MedicineService"
import { IMedicine } from "@/types/medicine"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { toast } from "sonner"
import moment from "moment"

export const manageMedicinesCols : ColumnDef<IMedicine>[] = [
    {
        accessorKey: "name",
        header: "Medicine Name",
        cell: ({ row }) => {
            
            return <div className="flex items-center gap-2">
                <Image src={row.original.image || "https://images.pexels.com/photos/6653040/pexels-photo-6653040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" } alt={row.original.name} width={50} height={50} className=" rounded-full w-8 h-8" />    
                <p>{row.original.name}</p>
            </div>
        }
    },
    {
        accessorKey: "price",
        header: "Status",
        cell: ({ row }) => {
            return (
                <p>{row.original.price}</p>
            )
        }
    },
    {
        accessorKey: "stock",
        header: "Stock",
        cell: ({ row }) => `₹${row.original.stock}`
    },
    {
        accessorKey: "updatedAt",
        header: "Last Updated",
        cell: ({ row }) => {
            return <p>{moment(row.original.updatedAt).fromNow()}</p>
        }
    },
    {
        accessorKey: "action",
        header: ()=>{
            return <p className="text-center">Update Stock</p>
        },
        cell: ({ row }) => {
            return (
                <UpdateStock medicine={row.original} />
            )
        }                     
    }
]





const UpdateStock = ({medicine}:{medicine:IMedicine})=>{
    const handleUpdateStatus = async()=>{
        const id = toast.loading(`Updating Stock...`)
        const result = await updateMedicineStock(medicine._id, medicine.stock)  
        if(result?.success){
            toast.success(`Stock Updated Successfully"`, {id})     
        }else{
            toast.error(`Could not Update stock`, {id})   
        }        
    }    
    return (
        <div className="flex justify-center ">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Update Stock</Button>
                </DialogTrigger>
                <DialogContent>

                </DialogContent>
            </Dialog>
        </div>
    )               
}




