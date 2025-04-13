import dotenv from "dotenv"
import path from "path"


dotenv.config({path:path.join(process.cwd(), ".env")})


export default{
    port: process.env.PORT,
    databse_uri:process.env.DATABASE_URI,
    salt_rounds:process.env.SALT_ROUNDS
}
