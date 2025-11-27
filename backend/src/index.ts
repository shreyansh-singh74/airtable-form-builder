import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.ts";

dotenv.config();
const Port = process.env.PORT;

const app = express();


// middlewares
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Backend is running.");
});

app.listen(Port,async ()=>{
    await connectDB();
    console.log("running on http://localhost:3000");
});