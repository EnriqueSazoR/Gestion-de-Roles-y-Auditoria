import type { Request, Response } from "express";
import { hashCompare, hashPassword } from "../Services/HashService.ts";
import { generarToken } from "../Services/TokenService.ts";
import prisma from '../Interface/usuario.ts';


/**
 * Registra un nuevo usuario en el sistema
 * @async
 * @function Register
 * @param {Request} req - Objeto Request de Express. Debe contener en el body:
 * - `nombreUsuario` (string): nombre de usuario a registrar.
 * - `email` (string): correo electrónico del usuario.
 * - `password` (string): contraseña e texto plano que será encriptada.
 * @param {Response} res - Objeto Response de Express para enviar la respuesta al cliente.
 * @returns {Promise<void>} Retorna una respueta HTTP con un token JWT si el registro fue exitoso
 * 
 * @example
 * // Ejemplo de cuerpo de la solicitud:
 * {
 *   "nombreUsuario" : "lsazodev" - Debe contener al menos 8 caracteres.
 *   "email" : "luis@gmail.com" - Debe contener el formato válido de un correo.
 *   "password" : "Guatemala$1998" - Debe contener mayúsculas, minúsculas, números, caracter especial y longitud de 10 como mínimo.
 * 
 * }
 * 
 * @example
 * // Respuesta exitosa
 * {
 *   "Registro Exitoso" : "<token>"
 * }
 * 
 * @throws {Error} Si ocurre un error durante el registro o la conexión a la base de de datos
 */
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

/**
 * Inicia sesión verificando las credenciales del usuario.
 *
 * @async
 * @function Login
 * @param {Request} req - Objeto Request de Express. Debe contener en el body:
 *  - `email` (string): correo electrónico del usuario.
 *  - `password` (string): contraseña en texto plano.
 * @param {Response} res - Objeto Response de Express para enviar la respuesta al cliente.
 * @returns {Promise<void>} Retorna una respuesta HTTP con un token JWT si las credenciales son válidas.
 *
 * @example
 * // Ejemplo de cuerpo de la solicitud:
 * {
 *   "email": "luis@example.com",
 *   "password": "Guatemala%1998"
 * }
 *
 * @example
 * // Respuesta exitosa:
 * {
 *   "Bienvenido": "LuisSazo",
 *   "token": "<token>"
 * }
 *
 * @throws {Error} Si el usuario no existe, la contraseña es incorrecta, o hay un error del servidor.
 */

export const Login = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body;

    try {
        const usuarioBD = await prisma.usuario.findUnique({ where: { email } });
        if (!usuarioBD) {
            res.status(400).json({ error: "No existe una cuanta asociada a este correo" });
            return;
        }

        const comparePassword = await hashCompare(password, usuarioBD.password);
        if (!comparePassword) {
            res.status(401).json({ error: "Credenciales inválidas" });
        }

        const token = generarToken(usuarioBD);

        res.status(200).json({ Bienvenido: `${usuarioBD.nombreUsuario}`, token })
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
        console.log(error);
    }
}