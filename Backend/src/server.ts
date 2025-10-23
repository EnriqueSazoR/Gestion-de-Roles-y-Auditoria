import app from "./app.ts";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;


app.listen(port, () => console.log(`Servidor ejecutandose en http://localhost:${port}`));