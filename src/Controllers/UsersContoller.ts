import { Request, Response } from "express";
import service from '../Services/UserService'

/**
   * Método para obtener todos los usuarios
*/
const getUsers = async (req: Request, res: Response) => {
    const data = await service.getUsers()
    res.send(data);
};

/**
   * Método para obtener un usuario por su ID
   * @param id
*/
const getUserById = async ({ params }: Request, res: Response) => {
    const { id } = params
    const data = await service.getUsersById(id)
    res.send(data);
};

/**
   * Método para crear un usuario
   * @param body {name: string, nationalId: string, email: string, password: string}
*/
const createUser = async ({ body }: Request, res: Response) => {
    const data = await service.createUser(body)
    res.send(data);
}

/**
   * Método para editar un usuario
   * @param body
   * @param id
*/
const updateUser = async ({ params, body }: Request, res: Response) => {
    const { id } = params
    const data = await service.updateUser(id, body)
    res.send(data);
}

/**
   * Método para eliminar un usuario
   * @param id
*/
const deleteUser = async ({ params }: Request, res: Response) => {
    const { id } = params
    const data = await service.deleteUser(id)
    res.send(data);
}
  
export default module.exports = { 
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
}