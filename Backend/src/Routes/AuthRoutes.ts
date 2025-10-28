import express from 'express';
import  {Register}  from '../Controllers/AuthController.ts';
import { validarDatos } from '../middlewares/validarDatos.ts';

const router = express.Router();

router.post('/register', validarDatos, Register);
//router.post('/login');

export default router;