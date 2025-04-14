import express, { Application, Request, Response } from "express"
import cors from "cors"
import router from "./app/routes"
import { errorHandler } from "./app/middlewares/globalErrorHandler"
import { notFound } from "./app/middlewares/notFound"

const app:Application = express()

// persers 
app.use(cors())
app.use(express.json())

// application routes
app.use("/api/v1",router)

app.get("/api/v1", (req:Request, res:Response)=>{
    res.send("MediMart is running 🏃🏼‍♂️‍➡️")
})

app.use(errorHandler)

app.use(notFound)


export default app