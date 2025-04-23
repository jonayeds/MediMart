"use client"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { VscSettings } from "react-icons/vsc";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import FilterMedicineForm, { TFilterValues } from "./FilterMedicineForm";

const SearchAndFilterMedicine = ({setQuery}:{setQuery:Dispatch<SetStateAction<Record<string,unknown>>>}) => {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState<TFilterValues>({max:"", min:"", category:""})
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null)
    useEffect(()=>{
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)
          }
          debounceTimeout.current = setTimeout(() => {
            setQuery(prev => ({ ...prev, searchTerm: search }))
          }, 500)
    },[search,setQuery])
    const handleSearch = async(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }
  return (
    <div className="flex justify-center">
            <Input type="text" onChange={handleSearch} className="md:w-[30vw] rounded-r-none border-[#1A2B13]" placeholder="Search here..."/>
            <Dialog>
                <DialogTrigger asChild>
            <Button variant={"outline"} className=" rounded-l-none bg-[#1A2B13] hover:bg-transparent cursor-pointer duration-300 border-l-0 hover:text-black  text-white">Filter <VscSettings /></Button>
                </DialogTrigger>
                <DialogContent className="bg-white border-none ">
                    <DialogTitle>Filter Medicines</DialogTitle>
                    <DialogDescription/>
                    <FilterMedicineForm filter={filter} setFilter={setFilter} setQuery={setQuery}/>
                </DialogContent>
            </Dialog>
        </div>
  )
}
export default SearchAndFilterMedicine