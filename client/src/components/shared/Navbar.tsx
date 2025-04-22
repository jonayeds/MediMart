import logo from "@/assets/svgs/MediMartLogo.svg"
import Image from "next/image"
import Link from "next/link"
import { CgMenuRight } from "react-icons/cg"

const Navbar = () => {
  return (
    <div className="absolute w-full flex z-20 justify-between items-end px-[5vw] py-4">
        <div>
            <Image src={logo} alt="MediMart" width={150} height={100} className="" />
        </div>
        <div className="flex items-center gap-24">

        <div className="flex items-center text-lg gap-8 ">
            <Link href={"/"} className="group cursor-pointer "><p>Home</p> <div className="bg-black h-[2px] w-0 group-hover:w-full duration-500 "/></Link>
            <Link href={"/"} className="group cursor-pointer "><p>About</p> <div className="bg-black h-[2px] w-0 group-hover:w-full duration-500"/></Link>
            <Link href={"/"} className="group cursor-pointer "><p>Medicines</p> <div className="bg-black h-[2px] w-0 group-hover:w-full duration-500"/></Link>
        </div>
        <CgMenuRight className="text-4xl" />
        </div>
    </div>
  )
}

export default Navbar