import express from 'express';
import AuthRutas from './Routes/AuthRoutes.ts'
import type { Response, Request } from 'express';


const app = express();


app.use(express.json());

app.use('/Auth', AuthRutas)

export default app;

