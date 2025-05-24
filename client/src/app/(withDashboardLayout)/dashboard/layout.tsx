import DashboardNavigation from "@/components/dashboard/DashboardNavigation";
import Image from "next/image";
import logo from "@/assets/svgs/MediMartLogo.svg"

const DashboardLayout = ({children}:Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen bg-primary pt-4 p-4 ">
      <div className="md:px-[5vw] px-[8vw]">
      <Image src={logo} width={100} alt="MediMart" height={50} className="md:w-[7vw] w-[25vw] my-4"/>
      </div>
      <div className="h-[calc(100vh-75px)] bg-primary flex items-start gap-4 pb-2">
        <DashboardNavigation/>
        <div className="bg-white flex-1 h-full rounded-xl p-4 ">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout