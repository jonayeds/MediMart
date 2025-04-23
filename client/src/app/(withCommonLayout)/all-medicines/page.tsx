
import MedicineViewer from "@/components/medicines/MedicineViewer"


const AllMedicinesPage = () => {


  return (
    <div className="container mx-auto px-4 pt-20">
        <h1 className="text-center font-heading text-[4vw] uppercase">Medicine Inventory</h1>
       <MedicineViewer/>
    </div>
  )
}

export default AllMedicinesPage