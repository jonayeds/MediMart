"use client"
import { useAppSelector } from "@/redux/hooks"
import { Button } from "../ui/button"
import { selectCart } from "@/redux/features/cart/cartSlice"
import { placeOrder } from "@/services/OrderService"
import { toast } from "sonner"
import { useState } from "react"
import FileInput from "../shared/FileInput"
import { uploadContentToDropbox } from "@/services/UploadPrescriptionService"

const PlaceOrder = () => {
    const cart = useAppSelector(selectCart)
    let isPrescriptionRequired = false
    const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null)
    cart.forEach(medicine => {
        if (medicine.medicine.prescriptionRequired) {
            isPrescriptionRequired = true
        }

    })
    const handlePlaceOrder = async()=>{
        const id = toast.loading("Placing order...")
        const medicines = cart.map(m=> ({medicine:m.medicine._id, quantity:m.quantity}))
        const {fileUrls} = await uploadContentToDropbox([prescriptionFile])
        const result = await placeOrder({medicines, prescription:fileUrls[0]})
        console.log(result)
        if(result.success){
            toast.success(result.message, {id})
        }else{
            toast.error(result?.errorSources[0]?.message, {id})
        }
    }
  return (
    <div className="flex justify-center gap-2 mt-8 items-center">
        {
            isPrescriptionRequired && <>
            {
                prescriptionFile ? <div
          className="flex    flex-col border-gray-300 border  px-8 py-4 rounded-xl relative "
          >
                <span className="hover:underline  truncate">{prescriptionFile.name}</span>
                <span className="text-gray-600 opacity-80 truncate">
                  {prescriptionFile.type === "application/pdf" ||prescriptionFile.type === "image/jpeg"
                    ? prescriptionFile?.type.split("/")[prescriptionFile.type.split("/").length - 1]
                    : prescriptionFile?.type.split(".")[prescriptionFile.type.split(".").length - 1]}
                  {" "}File
                </span>
              </div> :  <FileInput setFile={setPrescriptionFile} />
            }
            
            </>
        }
    <Button  onClick={handlePlaceOrder}  className=" ">Pay Now</Button>
    </div>
  )
}

export default PlaceOrder