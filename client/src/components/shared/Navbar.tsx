import logo from "@/assets/svgs/MediMartLogo.svg"
import logoWhite from "@/assets/svgs/MediMartLogoWhite.svg"
import Image from "next/image"
import Link from "next/link"
import { CgMenuRight } from "react-icons/cg"
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import MobileNavigation from "./MobileNavigation"

const Navbar = () => {
  return (
    <div className="absolute w-full flex z-20 justify-between items-end px-[5vw] py-4">
        <div>
            <Link href={"/"}>
            <Image src={logo} alt="MediMart" width={150} height={100} className="md:flex hidden" />
            </Link>
            <Link href={"/"}>
            <Image src={logoWhite} alt="MediMart" width={150} height={100} className="md:hidden flex" />
            </Link>
        </div>
        <div className="flex items-center gap-24">

        <div className="md:flex hidden items-center text-lg gap-8 ">
            <Link href={"/"} className="group cursor-pointer "><p>Home</p> <div className="bg-black h-[2px] w-0 group-hover:w-full duration-500 "/></Link>
            <Link href={"/"} className="group cursor-pointer "><p>About</p> <div className="bg-black h-[2px] w-0 group-hover:w-full duration-500"/></Link>
            <Link href={"/"} className="group cursor-pointer "><p>Medicines</p> <div className="bg-black h-[2px] w-0 group-hover:w-full duration-500"/></Link>
        </div>
        <Drawer direction="left">
        <DrawerTrigger>
        <CgMenuRight className="text-4xl text-white md:text-black cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent className="max-w-[50vw] md:max-w-[20vw]">
            <DrawerTitle/>
            <DrawerDescription/>
            <MobileNavigation/>
        </DrawerContent>
        </Drawer>
        </div>
    </div>
  )
}

export default Navbar