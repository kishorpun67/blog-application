import cookieParser from "cookie-parser";
import express, {Request, Response} from "express";
import cors from 'cors'
import { FRONTEND_URL } from "./config/config.js";

const app = express()

export default app

app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin:FRONTEND_URL,
        credentials: true,              
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
    ))
app.get('/', (req: Request, res:Response)=>{
    return res.send('hello');
})