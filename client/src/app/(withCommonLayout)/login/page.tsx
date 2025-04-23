import LoginForm from '@/components/auth/LoginForm'
import loginImage from "@/assets/images/pexels-n-voitkevich-5863401.jpg"
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-row-reverse justify-center items-center pt-20">
        <div>
            <Image src={loginImage} alt="Register" width={200} height={400} className="lg:h-[85vh]  md:flex hidden md:h- w-auto rounded-xl shadow-xl"/>
        </div>
        <div className="md:min-w-[40vw] min-w-[90vw]" >
            <h1 className="md:text-[7vw] text-[10vw] mb-8 text-center uppercase font-heading text-dark">Login</h1>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage