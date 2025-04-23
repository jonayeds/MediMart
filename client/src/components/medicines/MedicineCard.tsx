import { IMedicine } from "@/types/medicine"
import Image from "next/image"
import Link from "next/link"

const MedicineCard = ({medicine}:{medicine:IMedicine}) => {
  return (
    <Link href={`/medicine-details/${medicine._id}`} className="  relative z-10 group cursor-pointer flex flex-col justify-between">
        <div className={`absolute w-full h-full -z-10 top-0 group-hover:top-2 duration-500  rounded-md overflow-hidden  bg-cover`} style={{
            backgroundImage:`url(${medicine?.image || 'https://images.pexels.com/photos/6653040/pexels-photo-6653040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'})`,

        }}><div className="w-full h-full backdrop-blur-3xl "></div></div>
        <div className="bg-white p-4 rounded-md z-20">
        <Image src={ medicine.image||"https://images.pexels.com/photos/6653040/pexels-photo-6653040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={medicine.name} width={300} height={400} className="w-full rounded-lg"/>
        <h3 className="uppercase font-light  text-lg my-2">{medicine.name}</h3>
        <p className="text-gray-600 font-semibold">Category: {medicine.category}</p>
        <p className={`text-gray-700 text-lg ${medicine.stock===0 ? 'line-through': ''}`}>$$ {" "}{medicine.price}</p>
        </div>
    </Link>
  )
}

export default MedicineCard