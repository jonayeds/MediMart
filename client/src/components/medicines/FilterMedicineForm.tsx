"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { DialogClose } from '../ui/dialog'
import { Button } from '../ui/button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { MedicineCategories } from '@/types/medicine'
import { TbAdjustmentsCancel } from "react-icons/tb";

export type TFilterValues = {min:string,max:string, category:string}

const FilterMedicineForm = ({setQuery, filter, setFilter}:{setQuery:Dispatch<SetStateAction<Record<string,unknown>>>, filter:TFilterValues, setFilter:Dispatch<SetStateAction<TFilterValues>>}) => {
    
    const form = useForm({
        defaultValues:filter
    })
    const handleFilter:SubmitHandler<FieldValues> = (data)=>{
        const queryObj : Record<string,string>={} ;
        if(data?.category){
            queryObj.category = data.category
        }
            queryObj.min = data.min || 0
            queryObj.max = data.max || 9999
        setFilter(data as TFilterValues)
        setQuery(prev=> ({...prev, ...queryObj}))
    }
    const clearFilter = ()=>{
      setQuery(prev=>{
        const queryObj = {...prev}
        delete queryObj.category
        delete queryObj.min
        delete queryObj.max
        return (queryObj)
      })
      setFilter({category:"", max:"", min:""})
    }
  return (
    <Form {...form}>
              <form onSubmit={form.handleSubmit(handleFilter)} className="grid grid-cols-1 w-full">

              <div className="flex items-center justify-between gap-2  ">
              <p className=''>Price :</p>
          <FormField
            control={form.control}
            name="min"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                type="number"
                className="md:flex-1 max-w-[25vw]"
                placeholder="min"
                {...field}
                />
                </FormControl>
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="max"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                type="number"
                className="md:flex-1  max-w-[25vw]"
                placeholder="max"
                {...field}
                />
                </FormControl>
              </FormItem>
            )}
            />
            </div>
            <div className="flex items-center gap-2 my-2 w-full">
            <p className="">brand :</p>
            <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                <Select  onValueChange={field.onChange} defaultValue={field.value} >
                <SelectTrigger className='w-full' >
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {
                    MedicineCategories.map(category=>  <SelectItem key={category} value={category}>{category}</SelectItem>)
                 
                }
                
                </SelectGroup>
                </SelectContent>
              </Select>
                </FormControl>
              </FormItem>
            )}
            />
            </div>
           <div className='flex items-center gap-2 justify-center w-max mx-auto'>

            <DialogClose className=" max-w-max mx-auto" asChild>
              <Button  type="submit" className="border border-gray-300">Filter</Button>
            </DialogClose>
            <DialogClose className=" max-w-max mx-auto" asChild>
              <Button onClick={clearFilter}   className="border border-gray-300">Clear Filter <TbAdjustmentsCancel /></Button>
            </DialogClose>
           </div>
            </form>
      </Form>
  )
}

export default FilterMedicineForm