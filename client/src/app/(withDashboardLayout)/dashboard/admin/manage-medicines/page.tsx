import { manageMedicinesCols } from "@/components/dashboard/admin/ManageMedicinesCols"
import { DataTable } from "@/components/dashboard/DataTable"
import { getAllMedicines } from "@/services/MedicineService"


const ManageMadicinePage = async() => {
    const {data:medicines} = await getAllMedicines()
  return (
    <div>
        <DataTable data={medicines.data} columns={manageMedicinesCols}/>
    </div>
  )
}

export default ManageMadicinePage