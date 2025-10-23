import express from 'express';
import type { Response, Request } from 'express';


const app = express();


app.use(express.json());

// Ruta de prueba
app.get('/', (req:Request, res:Response) => {
    res.json({mensaje : "Bienvenido"})
})

export default app;

