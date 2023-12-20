import { PrismaClient, Users } from "@prisma/client";
import { User } from "../interfaces/User";

const getUsers = async (): Promise<Users[]> => {
    const prisma = new PrismaClient();
    try {
        const users = await prisma.users.findMany()
        return users
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const getUsersById = async (id: string): Promise<Users | null> => {
    const prisma = new PrismaClient();
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: id
            }
        })
        return user
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const createUser = async (user: User): Promise<User> => {
    const prisma = new PrismaClient();
    try {
        const data = await prisma.users.create({
            data: user
        })
        return data
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const updateUser = async (id: string, user: Partial<User>): Promise<Users> => {
    const prisma = new PrismaClient();
    try {
        const data = await prisma.users.update({
            where: {
                id: id
            },
            data: user
        })
        return data
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const deleteUser = async (id: string): Promise<void> => {
    const prisma = new PrismaClient();
    try {
        const user = await prisma.users.findUnique({where: {id: id}});
        if (!user) throw new Error('User not found')

        await prisma.users.delete({where: {id: id}});
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;    
    }
}

export default module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}