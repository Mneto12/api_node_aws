import { PrismaClient, Orders } from "@prisma/client";
import { Order } from "../interfaces/Order";

const getOrders = async (): Promise<Orders[]> => {
    const prisma = new PrismaClient();
    try {
        const orders = await prisma.orders.findMany({
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                id: true,
                quantity: true,
                totalPrice: true,
                User: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                Product: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        // @ts-ignore
        return orders
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

const createOrder = async (order: Order): Promise<Order> => {
    const prisma = new PrismaClient();
    try {
        const data = await prisma.orders.create({
            data: order
        })
        return data
    } catch (e) {
        console.error(e);
        prisma.$disconnect();
        throw e;
    }
}

export default module.exports = {
    getOrders,
    createOrder
}