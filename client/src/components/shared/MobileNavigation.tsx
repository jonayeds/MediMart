import Image from "next/image"
import logo from "@/assets/svgs/MediMartLogo.svg"
import Link from "next/link"
import { Button } from "../ui/button"
import { IUser } from "@/types/user"
import { useAppDispatch } from "@/redux/hooks"
import { logOut } from "@/redux/features/auth/authSlice"
import { logoutUser } from "@/services/AuthService"
const MobileNavigation = ({user}:{user:IUser | null}) => {
  const dispatch = useAppDispatch()
  const handleLogout = async()=>{
    dispatch(logOut())
    await logoutUser()
  }
  return (
    <div className="px-4">
        <Link href={"/"}>
        <Image src={logo} alt="MediMart" width={200} height={100} className="mx-auto mt-10 md:w-[15vw] w-[40vw]" />
        </Link>
        <hr className="border-1 border-gray-200 my-4" />
        <div className="flex gap-y-2 flex-col md:px-[4vw] px-0">
            <Link href={"/"} className="md:hidden hover:bg-gray-100 py-1 rounded-lg px-4">Home</Link>
            <Link href={"/about"} className="md:hidden hover:bg-gray-100 py-1 rounded-lg px-4">About Us</Link>
            <Link href={"/all-medicines"} className="md:hidden hover:bg-gray-100 py-1 rounded-lg px-4">All Medicines</Link>
            {
              user ?
               <>
               <Link href={"/profile"} className="hover:bg-gray-100 py-1 rounded-lg px-4">Profile</Link>
               <Link href={`/dashboard/${user.role}`} className="hover:bg-gray-100 py-1 rounded-lg px-4">Dashboard</Link>
               <hr className="border border-gray-300 my-2" />
               <Button onClick={handleLogout}  className="hover:bg-gray-100 py-1 rounded-lg px-4">Logout</Button>
               </>
                : <>
              <Link href={"/register"} className="hover:bg-gray-100 py-1 rounded-lg px-4">Register</Link>
              <Link href={"/login"} className="hover:bg-gray-100 py-1 rounded-lg px-4">Login</Link>
              </>
            }
        </div>
    </div>
  )
}

export default MobileNavigation