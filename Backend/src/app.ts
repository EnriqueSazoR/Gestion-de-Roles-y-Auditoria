import express from 'express';
import AuthRutas from './Routes/AuthRoutes.ts'



const app = express();


app.use(express.json());

app.use('/Auth', AuthRutas)

export default app;

