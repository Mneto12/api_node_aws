import { PrismaClient, Products } from "@prisma/client";
import { Product } from "../interfaces/Product"

const getProducts = async (): Promise<Products[]> => {
    const prisma = new PrismaClient();
    try {
        const products = await prisma.products.findMany()
        return products
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const getProductById = async (id: string): Promise<Products | null> => {
    const prisma = new PrismaClient();
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: id
            }
        })
        return product
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const createProduct = async (product: Product): Promise<Product> => {
    const prisma = new PrismaClient();
    try {
        const data = await prisma.products.create({
            data: product
        })
        return data
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const updateProduct = async (id: string, product: Partial<Product>): Promise<Products> => {
    const prisma = new PrismaClient();
    try {
        const data = await prisma.products.update({
            where: {
                id: id
            },
            data: product
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
        const product = await prisma.products.findUnique({where: {id: id}});
        if (!product) throw new Error('User not found')

        await prisma.products.delete({where: {id: id}});
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;    
    }
}

export default module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteUser
}