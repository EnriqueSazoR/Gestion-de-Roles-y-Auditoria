import type { Usuario } from "../Interface/ususario.interface.ts";
import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.SECRET_KEY || "Default";

export const generarToken = (ususario : Usuario): string => {
    return jwt.sign({id: ususario.id, email: ususario.email}, JWT_SECRET, {expiresIn: '1h'})
}