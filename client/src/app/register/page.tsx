
import Image from "next/image"
import registerImage from "@/assets/images/register.jpg"



import RegisterForm from "@/components/auth/RegisterForm"

const RegisterPage = () => {
   
  return (
    <div className="min-h-screen flex justify-center items-center pt-20">
        <div>
            <Image src={registerImage} alt="Register" width={200} height={400} className="lg:h-[85vh]  md:flex hidden md:h- w-auto rounded-xl shadow-xl"/>
        </div>
        <div className="md:min-w-[40vw] min-w-[90vw]" >
            <h1 className="md:text-[7vw] text-[10vw] mb-8 text-center uppercase font-heading text-dark">Register</h1>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default RegisterPage