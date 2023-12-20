import { Users } from '@prisma/client'
import repository from '../Repositories/UserRepository'
import { Encrypt } from '../utils/encryptPassword'
import { User } from '../interfaces/User'

const getUsers = async (): Promise<Users[] | null> => {
    return await repository.getUsers()
}

const getUsersById = async (id: string): Promise<Users | null> => {
    return await repository.getUsersById(id)
}

const createUser = async (user: User): Promise<User> => {
    const encryptPass = await encryptPassword(user.password)
    user.password = encryptPass
    return await repository.createUser(user)
}

const updateUser = async (id: string, user: Partial<User>): Promise<Users> => {
    return await repository.updateUser(id,user)
}

const deleteUser = async (id: string): Promise<void> => {
    await repository.deleteUser(id)
}

/**
   * Método que encripta y envia la contrasena
   * @param encryptPass
*/
const encryptPassword = async (password: string) => {
    const encryptPass = await Encrypt(password)
    return encryptPass
}

export default module.exports = { 
    getUsers, 
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}