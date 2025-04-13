import express, { Application, Request, Response } from "express"
import cors from "cors"

const app:Application = express()

// persers 
app.use(cors())
app.use(express.json())

app.get("/", (req:Request, res:Response)=>{
    res.send("MediMart is running 🏃🏼‍♂️‍➡️")
})


export default app