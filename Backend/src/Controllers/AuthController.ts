import type { Request, Response } from "express";
import { hashPassword } from "../Services/HashService.ts";
import { generarToken } from "../Services/TokenService.ts";
import prisma from '../Interface/usuario.ts';



export const Register = async (req: Request, res: Response): Promise<void> => {

    const { nombreUsuario, email, password } = req.body;

    try {
        const passwordHash = await hashPassword(password);

        const user = await prisma.usuario.create({
            data: {
                nombreUsuario,
                email,
                password: passwordHash,
                idRol: 1
            }

        })

        const token = generarToken(user);

        res.status(201).json({ RegistroExitoso: token });

    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
        console.log(error);
    }
}