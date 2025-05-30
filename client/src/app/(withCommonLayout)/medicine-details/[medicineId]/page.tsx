import AddtoCartComponent from "@/components/cart/AddToCart";
import { Button } from "@/components/ui/button"
import { getASingleMedicine } from "@/services/MedicineService"
import { IMedicine } from "@/types/medicine"
import Image from "next/image"


const MedicineDetailPage = async({ params }: { params:Promise<{ medicineId: string }> }) => {
    const medicineId = (await params).medicineId
    const data = await getASingleMedicine(medicineId)
    const medicine:IMedicine = data?.data
    

  return (
    <div className="container mx-auto px-8 pt-20 ">
        <div className="grid md:grid-cols-2  justify-center md:flex-row  flex-col  md:items-start gap-8">
        <Image src={medicine?.image|| 'https://images.pexels.com/photos/6653040/pexels-photo-6653040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={medicine.name} width={500} height={500} className="md:w-[30vw] w-full h-auto mx-auto md:mx-0 rounded-lg shadow-2xl md:ml-auto"/>
            <div className="flex flex-col gap-4 justify-between md:h-full lg:h-max ">
                <h1 className="font-heading text-4xl">{medicine.name}</h1>
                <p>Category: {medicine.category}</p>
                <p className="font-extralight">Cure for : {medicine.symptoms.join(" | ")}</p>
                <p>Manufacturer: {medicine.manufacturer}</p>
                <p>{medicine.prescriptionRequired? <span className="bg-yellow-500 text-white p-1 rounded-lg">Prescription Required</span>: <span className="bg-green-600 text-white p-1 rounded-lg">No Prescription Required</span>}</p>
                <p className="text-lg">Stock: {medicine.stock}</p>
                <p className={`text-3xl ${medicine.stock === 0 ?'line-through text-gray-400':'text-dark'}`}>$${medicine.price}</p>
                <div className="flex items-center gap-2">

                <AddtoCartComponent medicine={medicine}/>
                <Button  className="hover:text-white">Buy Now </Button>
                </div>
            </div>
        </div>
                <p className="text-sm mt-8 text-gray-600">{medicine?.description}</p>
    </div>
  )
}

export default MedicineDetailPage