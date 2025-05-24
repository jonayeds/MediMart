import Link from "next/link"
import { AiFillShopping as OrderIcon } from "react-icons/ai";
import { MdPerson2 as ProfileIcon } from "react-icons/md";
import { MdOutlineRateReview as ReviewIcon } from "react-icons/md";



const DashboardNavigation = () => {
  return (
    <div className="md:block hidden mt-4 px-4 space-y-6">
      <Link href={"/dashboard/customer/my-orders"} className="flex items-center  group relative ">
        <div className="h-8 bg-dark w-0 rounded-sm group-hover:w-1 duration-500 absolute left-0"/>
        <OrderIcon className="text-dark text-2xl relative left-0 group-hover:left-2 duration-500 "/>
      </Link>
      <Link href={"/dashboard/customer/my-reviews"} className="flex items-center  group relative ">
        <div className="h-8 bg-dark w-0 rounded-sm group-hover:w-1 duration-500 absolute left-0"/>
        <ReviewIcon className="text-dark text-2xl relative left-0 group-hover:left-2 duration-500 "/>
      </Link>
      <Link href={"/dashboard/customer/profile"} className="flex items-center  group relative ">
        <div className="h-8 bg-dark w-0 rounded-sm group-hover:w-1 duration-500 absolute left-0"/>
        <ProfileIcon className="text-dark text-2xl relative left-0 group-hover:left-2 duration-500 "/>
      </Link>
    </div>
  )
}

export default DashboardNavigation