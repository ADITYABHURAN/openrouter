import { app } from "./app";
import { cors } from '@elysiajs/cors'


const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
})).listen(PORT);