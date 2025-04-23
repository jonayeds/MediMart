
"use client"

import { useEffect, useState } from "react"
import MedicineCard from "./MedicineCard"
import { IMedicine } from "@/types/medicine"
import { getAllMedicines } from "@/services/MedicineService"
import SearchAndFilterMedicine from "./SearchAndFilterMedicine"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MedicineViewer = () => {
    const [medicines, setMedicines] = useState([])
    const [query, setQuery] = useState<Record<string,unknown>>({})
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState<string>("")
    useEffect(()=>{
        const getMedicines = async()=>{
            setLoading(true)
            const res =await getAllMedicines(query)
                setSearchTerm(res?.data?.meta?.searchTerm)       
                setMedicines(res?.data?.data)
        }
        getMedicines()
    },[query])
    useEffect(()=>{
        if(searchTerm === query.searchTerm){
            setLoading(false)
        }

    },[searchTerm,query])
  return (
    <div>
        <div>
            <SearchAndFilterMedicine setQuery={setQuery}  />
        </div>
         <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 ">
            {
                loading ? <div className="flex justify-center mt-24 lg:col-span-3 md:col-span-2 "><AiOutlineLoading3Quarters className="animate-spin duration-300 transition-all text-3xl" /></div>: medicines.map((medicine: IMedicine, idx:number)=><MedicineCard key={idx} medicine={medicine}/>)
            }

        </div>
    </div>
  )
}

export default MedicineViewer