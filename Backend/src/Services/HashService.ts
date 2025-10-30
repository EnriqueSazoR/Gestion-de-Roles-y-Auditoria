import bcrypt from 'bcrypt';
import type { Usuario } from '../Interface/ususario.interface.ts';

const SaltRounds: number = 10;

// Hash contraseña
export const hashPassword = async ( password: string): Promise<string> => {
    return await bcrypt.hash(password, SaltRounds);
}  


// Comparar Hash con la base de datos
export const hashCompare = async ( password : string, hash : string ): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}