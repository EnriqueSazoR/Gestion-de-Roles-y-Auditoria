import bcrypt from 'bcrypt';

const SaltRounds: number = 10;

// Hash contraseña
export const hashPassword = async ( password: string): Promise<string> => {
    return await bcrypt.hash(password, SaltRounds);
}  


// Comparar Hash con la base de datos