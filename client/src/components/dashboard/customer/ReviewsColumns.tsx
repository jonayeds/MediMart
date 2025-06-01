// import { IReview } from "@/types/Review"
// import { ColumnDef } from "@tanstack/react-table"

// export const orderCols : ColumnDef<IReview>[] = [
//     {
//         accessorKey: "medicines",
//         header: "Medicines",
//         cell: ({ row }) => {
            
//             return <MedicinesCol row={row} />
//         }
//     },
//     {
//         accessorKey: "status",
//         header: "Status",
//         cell: ({ row }) => {
//             const status = row.original.status
//             return (
//                 <span className={`px-2 py-1 rounded-md text-white ${status === "pending" ? "bg-yellow-500" : status === "processing" ? "bg-blue-500" : status === "shipped" ? "bg-green-500" : status === "delivered" ? "bg-purple-500" : "bg-red-500"}`}>
//                     {status.charAt(0).toUpperCase() + status.slice(1)}
//                 </span>
//             )
//         }
//     },
//     {
//         accessorKey: "totalPrice",
//         header: "Total Price",
//         cell: ({ row }) => `₹${row.original.totalPrice}`
//     },
//     {
//         accessorKey: "prescription",
//         header: "Prescription",
//         cell: ({ row }) => {
//             const prescription = row.original.prescription
//             if( !prescription) {
//                 return <span className="text-gray-500">No Prescription</span>
//             }
//             return (
//                 <a href={prescription} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                     View Prescription
//                 </a>
//             )
//         }                      
//     },
//     {
//         accessorKey: "action",
//         header: "Action",
//         cell: ({ row }) => {
//            if(row.original.status === "delivered"){
//                 return <ReviewMedicines />
//            }
//            if(row.original.status === "pending" ){
//                 return <CancelOrder orderId={row.original._id} />
//            }
           
//         }                      
//     }
// ]
