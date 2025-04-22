"use client"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const RegisterForm = () => {
    const form = useForm({
        defaultValues:{
            name:"",
            email:"",
            phoneNumber:"",
            address:"",
            password:""
        }
    })
    const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
        console.log(data)
    }
  return (
    <Form {...form}>
                <form  onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 max-w-[80%] mx-auto">
                    <FormField
                    control={form.control}
                    name={"name"}
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input className="" type="text" placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                    control={form.control}
                    name={"email"}
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input className="" type="text" placeholder="Your Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                    control={form.control}
                    name={"phoneNumber"}
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input className="" type="number" placeholder="Your Phone Number`" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                    control={form.control}
                    name={"address"}
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                           <Textarea {...field} placeholder="Your Address..." className="min-h-16 max-h-20"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                    control={form.control}
                    name={"password"}
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                          <Input {...field} placeholder="*****" type="password"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
  )
}

export default RegisterForm