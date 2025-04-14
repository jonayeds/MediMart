import { model, Schema } from "mongoose";
import { IUser, IUserModel } from "./user.interface";
import { UserRoles } from "./user.constant";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema = new Schema<IUser, IUserModel>({
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
        default:"customer"
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


// statics
userSchema.static("isUserExists", async function({email, phoneNumber, identification} ){
    let user;
    if(email){
        user = await User.findOne({email})
        if(user) return {user, property:"Email"}
    }
    if(phoneNumber){
        user = await User.findOne({phoneNumber})
        if(user) return {user, property:"Phone Number"}
    }
    if(identification){
        user = await User.findOne({email:identification})
        if(user) return {user, property:"Email"}
        user = await User.findOne({phoneNumber:identification})
        if(user) return {user, property:"Phone Number"}
    }
    return null
})

userSchema.static("isPasswordCorrect", async function(plainTextPassword, hashedPassword){
    const isCorrect = await bcrypt.compare(plainTextPassword, hashedPassword)
    return isCorrect
})
  

export const User = model<IUser, IUserModel>("User", userSchema) 