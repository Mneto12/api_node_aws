import bcrypt from 'bcrypt'

// Encrypta la contraseña del usuario antes de guardarla en la base de datos
const Encrypt = async (password: string) => {
    return await bcrypt.hash(password, 10);
}

// Compara la contraseña encryptada del usuario con la contraseña guardada en la base de datos
const Compare = async (password: string, hasPassword: string) => {
    return await bcrypt.compare(password, hasPassword)
}

export {
    Encrypt,
    Compare,
}