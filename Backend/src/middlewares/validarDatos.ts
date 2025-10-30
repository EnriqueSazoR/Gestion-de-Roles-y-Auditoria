import { body, validationResult } from "express-validator";
import type { Request, Response, NextFunction } from "express";

export const validarDatosRegistro = [
    body("email")
        .isEmail()
        .withMessage("El correo debe tener un formato valido [@gmail, @outlook, et]"),

    body("nombreUsuario").
        isLength({ min: 8 })
        .withMessage("El nombre de usuario debe tener al menos 8 caracteres"),

    body("password")
        .isLength({ min: 10 })
        .withMessage("L contraseña es obligatoria y debe contener al menos 10 caracteres")
        .matches(/[A-Z]/)
        .withMessage("La contraseña debe contener al menos una mayúscula")
        .matches(/[0-9]/)
        .withMessage("La constraseña debe contener al menos un número")
        .matches(/[\w_]/)
        .withMessage("La contraseña debe contener al menos un caracter especial"),


    (req: Request, res: Response, next: NextFunction) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json(errores.array());
        }
        next();
    },

];

export const validarDatosLogin = [
    body("email")
        .isEmail()
        .withMessage("El correo debe tener un formato valido [@gmail, @outlook, et]"),
    
    (req: Request, res: Response, next: NextFunction) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
           return res.status(400).json(errores.array());     
        }
        next();
    },

];