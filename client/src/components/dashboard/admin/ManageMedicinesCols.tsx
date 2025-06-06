"use client"



import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { updateMedicineStock } from "@/services/MedicineService"
import { IMedicine } from "@/types/medicine"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { toast } from "sonner"
import moment from "moment"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState } from "react"
import { Plus } from "lucide-react"

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
        header: "Price",
        cell: ({ row }) => {
            return (
                <p>${row.original.price}</p>
            )
        }
    },
    {
        accessorKey: "stock",
        header: "Stock",
        cell: ({ row }) => `${row.original.stock}`
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
    const [stocks,setStocks] = useState(0)
    const handleStockChange = (e?:ChangeEvent<HTMLInputElement>)=>{
        if(e){
                const value = e.target.value;
                if(value === "") {
                    setStocks(0);
                } else {
                    setStocks(Number(value));   
                }
            }
            else{
                setStocks(prev => prev + 1);
            }
            console.log(stocks)
    }
    const handleUpdateStatus = async()=>{
        const id = toast.loading(`Updating Stock...`)
        const result = await updateMedicineStock(medicine._id, medicine.stock+ stocks);  
        console.log(result)
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
                <DialogContent className="bg-white ">
                    <DialogTitle>Update Stock</DialogTitle>
                    <DialogDescription/>
                    <div>
                        <p className="text-center">Current Stock: <span className="text-lg">{medicine.stock}</span> + <span>{stocks}</span></p>
                        <div className="flex items-center  gap-2">
                        <Input placeholder="New stocks to add..."  onChange={(e)=>handleStockChange(e)} type="number"/><div className="bg-black cursor-pointer text-white rounded-lg p-1" onClick={()=>handleStockChange()}><Plus/></div>
                        <Button disabled={stocks === 0} variant={"secondary"} onClick={handleUpdateStatus} className="bg-green-800 text-white hover:text-black">Update</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )               
}




