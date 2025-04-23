import MedicineCard from "@/components/medicines/MedicineCard"
import { getAllMedicines } from "@/services/MedicineService"
import { IMedicine } from "@/types/medicine"

const AllMedicinesPage = async() => {
    const data = await getAllMedicines()
    const medicines = data?.data?.data
  return (
    <div className="container mx-auto px-4 pt-20">
        <h1 className="text-center font-heading text-[4vw] uppercase">Medicine Inventory</h1>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 ">
        {
            medicines.map((medicine: IMedicine, idx:number)=><MedicineCard key={idx} medicine={medicine}/>)
        }
        </div>
    </div>
  )
}

export default AllMedicinesPage