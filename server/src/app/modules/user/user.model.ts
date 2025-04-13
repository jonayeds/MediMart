import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import { UserRoles } from "./user.constant";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:UserRoles,
        required:true
    }
},{
    timestamps:true
})

// pre save middleware 
userSchema.pre("save",async function() {
    this.password = await bcrypt.hash(this.password, Number(config.salt_rounds))
})

// post save middleware
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
  });
  

export const User = model<IUser>("User", userSchema) 