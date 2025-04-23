"use client"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Input } from "../ui/input"

const SearchAndFilterMedicine = ({setQuery}:{setQuery:Dispatch<SetStateAction<Record<string,unknown>>>}) => {
    const [search, setSearch] = useState("")
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
            <Input type="text" onChange={handleSearch} className="md:w-[30vw] border-gray-400" placeholder="Search here..."/>
        </div>
  )
}
export default SearchAndFilterMedicine