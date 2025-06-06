"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MedicineCategories } from "@/types/medicine";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CalendarIcon, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { createMedicine } from "@/services/MedicineService";
import { toast } from "sonner";

const AddMedicineForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      manufacturer: "",
      description: "",
      prescriptionRequired: false,
      category: "",
      symptoms: "",
      image:"",
      expiryDate: "",
    },
  });
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const handleCreateMedicine: SubmitHandler<FieldValues> = async (data) => {
    const id = toast.loading("Creating medicine...");       
    data.symptoms = symptoms;
    console.log(data);
    data.stock = Number(data.stock);    
    data.price = Number(data.price);    
    const result = await createMedicine(data)
    console.log(result)
    if (result.success) {
      form.reset();
      setSymptoms([]);
      toast.success("Medicine created successfully", {id});
    } else {
      toast.error(result.message || "Failed to create medicine", {id});
    }       
  };
  const handleAddSymptom = () => {
    const symptom = form.getValues("symptoms");
    if (symptom && symptom.trim() !== "") {
      setSymptoms([...symptoms, symptom]);
      form.setValue("symptoms", "");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateMedicine)}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:max-w-[80vw] mx-auto"
      >
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Price" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* stock */}
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Stock" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* image */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="lg:col-span-2 col-span-1">
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Image URL" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* manufacturer */}
        <FormField
          control={form.control}
          name="manufacturer"
          render={({ field }) => (
            <FormItem className="md:col-span-2 lg:col-span-1 col-span-1">
              <FormLabel>Manufacturer</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Manufacturer" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="lg:col-span-3 md:col-span-2 col-span-1">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description..." {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* prescriptionRequired */}
        <FormField
          control={form.control}
          name="prescriptionRequired"
          render={({ field }) => (
            <FormItem className="flex md:items-end relative md:bottom-4 items-center   w-full gap-4">
              <FormLabel>Prescription Required</FormLabel>
              <FormControl className="">
                <Switch   
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />
        {/* category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="lg:col-span-2 col-span-1"> 
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className=" w-full">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[40vh] overflow-y-auto">
                    {MedicineCategories.map((category) => (
                      <SelectItem value={category} key={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />

<hr className="bg-gray-300 lg:col-span-3 md:col-span-2 col-span-1" />

        {/* symptoms */}
        <FormField
          control={form.control}
          name="symptoms"
          render={({ field }) => (
            <FormItem className="lg:col-span-3 md:col-span-2 col-span-1">
              <div className="flex items-center justify-between">
                <FormLabel>Symptoms</FormLabel>
                <Button onClick={handleAddSymptom} type="button">
                  <Plus />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 gap-y-4 ">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="bg-gray-100 px-3 my-2 py-1 relative rounded-md ">
                    <span>{symptom}</span>
                    <span onClick={()=>setSymptoms((prev)=> prev.filter((p,idx)=> (p !== symptom)&& (idx !== index)) )} className="absolute cursor-pointer hover:bg-red-700 duration-300 -top-2 right-0 text-xs text-white bg-red-500 rounded-full w-4 flex items-center justify-center h-4">X</span>
                  </div>
                ))}
              </div>
              <FormControl>
                <Input placeholder="Add a symptom" {...field} />
              </FormControl>
              <FormDescription />
            </FormItem>
          )}
        />

<hr className="bg-gray-300 lg:col-span-3 md:col-span-2 col-span-1" />

        {/* expiryDate */}
        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiry Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        field.value
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date ? date.toDateString() : "")}
                    disabled={(date) => date < new Date()}
                    captionLayout="dropdown"
                    fromYear={new Date().getFullYear()}
                    toYear={new Date().getFullYear() + 5}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-end  lg:col-span-2 col-span-1">
          <Button type="submit" className="relative md:bottom-2 "> Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default AddMedicineForm;
