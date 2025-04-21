import bcrypt from "bcrypt"
import config from "../../config"
export const hashPassword = async(password:string)=>{
    const hashedPassword = await bcrypt.hash(password, config.salt_rounds as string )
    return hashedPassword
}