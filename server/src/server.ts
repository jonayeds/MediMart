import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databse_uri as string);
    server = app.listen(config.port, () => {
      console.log(`MediMart is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// process.on("unhandledRejection", ()=>{
//   console.log("unhandledRejection Detected 🥸 Shutting down the server")
//   if(server){
//     server.close(()=>{
//       process.exit(1)
//     })
//   }
//   process.exit(1)
// })
// process.on("uncaughtException",()=>{
//   console.log("uncaughtException Detected 🥵 Server going down")
//   process.exit(1)
// })

