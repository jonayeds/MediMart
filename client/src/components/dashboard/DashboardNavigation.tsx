"use client";
import Link from "next/link";
import { AiFillShopping as OrderIcon } from "react-icons/ai";
import { MdPerson2 as ProfileIcon } from "react-icons/md";
import { MdOutlineRateReview as ReviewIcon } from "react-icons/md";
import { IoMdHome as HomeIcon } from "react-icons/io";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { ElementType } from "react";

const DashboardNavigation = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <div className="md:block hidden mt-4 px-4 space-y-6">
      {user?.role === "customer" ? <CustomerNavigation /> : <AdminNavigation />}
    </div>
  );
};

const CustomerNavigation = () => {
  return (
    <>
      <Navigator route="/" Icon={HomeIcon} />
      <Navigator route="/dashboard/customer/my-orders" Icon={OrderIcon} />
      <Navigator route="/dashboard/customer/my-reviews" Icon={ReviewIcon} />
      <Navigator route="/dashboard/customer/profile" Icon={ProfileIcon} />
    </>
  );
};
const AdminNavigation = () => {
  return (
    <>
      <Navigator route="/" Icon={HomeIcon} />
      <Navigator route="/dashboard/customer/my-orders" Icon={OrderIcon} />
      <Navigator route="/dashboard/customer/my-reviews" Icon={ReviewIcon} />
      <Navigator route="/dashboard/customer/profile" Icon={ProfileIcon} />
    </>
  );
};

const Navigator = ({ route, Icon }: { route: string; Icon: ElementType }) => {
  return (
    <Link href={route} className="flex items-center  group relative ">
      <div className="h-8 bg-dark w-0 rounded-sm group-hover:w-1 duration-500 absolute left-0" />
      <Icon className="text-dark text-2xl relative left-0 group-hover:left-2 duration-500 " />
    </Link>
  );
};

export default DashboardNavigation;
