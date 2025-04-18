import { model, Schema } from "mongoose";
import { IMedicines, IOrder } from "./order.interface";

const medicinesSchema = new Schema<IMedicines>({
    medicine:{
        type:Schema.Types.ObjectId,
        ref:"Medicine",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = new Schema<IOrder>({
    medicines:{
        type:[medicinesSchema],
        required:true
    },
    customer:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    paymentSession:{
        type:String,
    },
    prescription:{
        type:String,
    }
})


export const Order = model<IOrder>("Order", orderSchema)