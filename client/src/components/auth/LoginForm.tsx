"use client"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import Link from "next/link"

const LoginForm = () => {
    const form = useForm({
        defaultValues:{
            identification:"",
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
                    name={"identification"}
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email or Phone</FormLabel>
                          <FormControl>
                            <Input className="" type="text" placeholder="Email or Phone number" {...field} />
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
                    <p className="text-sm text-center flex items-center gap-2 my-2 justify-center">Don&apos;t have an account? <Link className="hover:underline" href={"/register"}>Register</Link></p>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
  )
}

export default LoginForm