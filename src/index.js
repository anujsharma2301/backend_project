import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'  // ✅ added the dot
})

connectDB();
























// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express';

// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("ERROR",()=> {
//         console.log("ERROR in Express:", error);
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is Listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR", error)
//         throw err 
//     }
// })()