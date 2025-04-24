
"use client"

import { useEffect, useState } from "react"
import MedicineCard from "./MedicineCard"
import { IMedicine } from "@/types/medicine"
import { getAllMedicines } from "@/services/MedicineService"
import SearchAndFilterMedicine from "./SearchAndFilterMedicine"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "../ui/button"

const MedicineViewer = () => {
    const [medicines, setMedicines] = useState([])
    const [query, setQuery] = useState<Record<string,unknown>>({})
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [meta, setMeta]= useState<{total:number, page:number, totalPage:number, searchTerm:string}>({total:0, page:0, totalPage:0, searchTerm:""})
    useEffect(()=>{
        const getMedicines = async()=>{
            setLoading(true)
            const res =await getAllMedicines(query)
                setSearchTerm(res?.data?.meta?.searchTerm)       
                setMedicines(res?.data?.data)
                setMeta(res?.data?.meta)
        }
        getMedicines()
    },[query])
    console.log(searchTerm)
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
        <div className="w-full flex justify-end items-center my-8 gap-4">
        {
            (!loading && meta.page>0) && <>
            <p className="text-xl font-extralight ">Page:</p>
            
            <div className="flex items-center gap-2">{Array(meta.totalPage).fill(0).map((_page, idx)=> <Button onClick={()=> setQuery((prev=> ({...prev, page:idx+1})))} className={`${meta.page !== (idx+1) ? 'hover:scale-105 ': 'bg-[#1A2B13] text-white'}  cursor-pointer`} variant={"outline"} key={idx}>{idx+1} </Button>)}</div>
            </>
        }
        </div>
    </div>
  )
}

export default MedicineViewer