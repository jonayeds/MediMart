"use client"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import Link from "next/link"
import { registerUser } from "@/services/AuthService"
import {toast} from "sonner"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { setUser } from "@/redux/features/auth/authSlice"
import { TUserRole } from "@/types/user"

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
    const router = useRouter()
    const dispatch = useAppDispatch()
    const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
        const id = toast.loading("Registering...")
        const result = await registerUser(data)
        console.log(result)
        if(result?.success){
          toast.success(result?.message, {id})
          dispatch(setUser({user:{
            email:result.data.data.email as string,
            role:result.data.data.role as TUserRole,
            phoneNumber:result.data.phoneNumber as string
           },
           token:result.data.accessToken
          }))
          router.push("/")
        }else{
          toast.error(result?.errorSources[0].message || result?.message , {id})
        }
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
                    <p className="text-sm text-center flex items-center gap-2 my-2 justify-center">Already have an account? <Link className="hover:underline" href={"/login"}>Login</Link></p>
                    <Button type="submit">Submit</Button>

                </form>
            </Form>
  )
}

export default RegisterForm