"use client"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import Link from "next/link"
import { toast } from "sonner"
import { loginUser } from "@/services/AuthService"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { setUser } from "@/redux/features/auth/authSlice"

const LoginForm = () => {
    const form = useForm({
        defaultValues:{
            identification:"",
            password:""
        }
    })
    const dispatch = useAppDispatch()
    const router = useRouter()
    const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
      const id = toast.loading("Logging in...")
      const result = await loginUser(data)
      console.log(result)
      if(result?.success){
        toast.success(result.message, {id})
        const {data:user} = result
        dispatch(setUser({
           user:user.data,
           token:user?.accessToken
        }))
        router.push("/")
      }else{
        toast.error(result?.errorSources[0]?.message || result?.message , {id})
      }
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