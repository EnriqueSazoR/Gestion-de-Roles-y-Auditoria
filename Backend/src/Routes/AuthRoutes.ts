import express from 'express';
import  {Register, Login}  from '../Controllers/AuthController.ts';
import { validarDatosRegistro, validarDatosLogin } from '../middlewares/validarDatos.ts';

const router = express.Router();

router.post('/register', validarDatosRegistro, Register);
router.post('/login', validarDatosLogin, Login);

export default router;