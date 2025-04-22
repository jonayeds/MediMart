import Image from "next/image"
import logo from "@/assets/svgs/MediMartLogo.svg"
import Link from "next/link"
const MobileNavigation = () => {
  return (
    <div className="px-4">
        <Image src={logo} alt="MediMart" width={200} height={100} className="mx-auto mt-10 md:w-[15vw] w-[40vw]" />
        <hr className="border-1 border-gray-200 my-4" />
        <div className="flex gap-y-2 flex-col md:px-[7vw] px-0">
            <Link href={"/"} className="md:hidden">Home</Link>
            <Link href={"/about"} className="md:hidden ">About Us</Link>
            <Link href={"/all-medicines"} className="md:hidden">All Medicines</Link>
            <Link href={"/register"} className="">Register</Link>
            <Link href={"/login"} className="">Login</Link>
        </div>
    </div>
  )
}

export default MobileNavigation