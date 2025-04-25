"use client"
import logo from "@/assets/svgs/MediMartLogo.svg"
import logoWhite from "@/assets/svgs/MediMartLogoWhite.svg"
import Image from "next/image"
import Link from "next/link"
import { CgMenuRight } from "react-icons/cg"
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import MobileNavigation from "./MobileNavigation"
import { usePathname } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"
import { BsCart2 as CartIcon } from "react-icons/bs";
import { selectCart } from "@/redux/features/cart/cartSlice"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Navbar = () => {
  const path = usePathname()
  const user = useAppSelector(selectCurrentUser)
  const cart = useAppSelector(selectCart)
  let totalMedicine= 0;
   cart.forEach(m=> {
    totalMedicine += m.quantity
   })

  return (
    <div className="absolute w-full flex z-20 justify-between items-end px-[5vw] py-4">
        <div>
            <Link href={"/"}>
            <Image src={logo} alt="MediMart" width={150} height={100} className={`${path !== "/" ? 'flex': 'hidden'} md:flex `} />
            </Link>
            <Link href={"/"}>
            <Image src={logoWhite} alt="MediMart" width={150} height={100} className={`${path === "/" ? 'flex': 'hidden'} md:hidden `} />
            </Link>
        </div>
        <div className="flex items-center gap-24">

        <div className="md:flex hidden items-center text-lg gap-8 ">
            <Link href={"/"} className="group cursor-pointer "><p>Home</p> <div className={`bg-black h-[2px]  duration-500 ${path === "/" ? 'w-full':'w-0 group-hover:w-full'}`}/></Link>
            <Link href={"/about"} className="group cursor-pointer "><p>About</p> <div className={`bg-black h-[2px]  duration-500 ${path === "/about" ? 'w-full':'w-0 group-hover:w-full'}`}/></Link>
            <Link href={"/all-medicines"} className="group cursor-pointer "><p>Medicines</p> <div className={`bg-black h-[2px]  duration-500 ${path === "/all-medicines" ? 'w-full':'w-0 group-hover:w-full'}`}/></Link>
        </div>
        <div className="flex items-center  gap-8">
          <Link href={"/my-cart"} className="relative">
          <span className={`absolute -bottom-1 -right-[14px] bg-dark text-white rounded-full w-4 h-4 text-xs flex justify-center items-center ${totalMedicine>0 ? '': "hidden"}`}>{totalMedicine}</span>
          <CartIcon className="text-2xl"/>
          </Link>
          {
            user && <Link href={"/profile"} className="md:flex hidden">
            <Avatar>
    <AvatarImage src={user?.profileImage} />
    <AvatarFallback className="bg-dark text-white">{user?.name?.split(" ").map(n=> n.charAt(0)).join("")}</AvatarFallback>
  </Avatar>
            </Link>
          }
        <Drawer direction="left">
        <DrawerTrigger>
        <CgMenuRight className={`${path === "/" ? 'text-white md:text-black': 'text-black' } text-4xl  cursor-pointer`} />
        </DrawerTrigger>
        <DrawerContent className="max-w-[50vw] md:max-w-[20vw]">
            <DrawerTitle/>
            <DrawerDescription/>
            <MobileNavigation user={user}/>
        </DrawerContent>
        </Drawer>
        </div>
        </div>
    </div>
  )
}

export default Navbar