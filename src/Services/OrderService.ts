import { Orders } from '@prisma/client'
import repository from '../Repositories/OrderRepository'
import { Order } from '../interfaces/Order'

const getOrders = async (): Promise<Orders[] | null> => {
    return await repository.getOrders()
}

const createOrder = async (order: Order): Promise<Order> => {
    return await repository.createOrder(order)
}

export default module.exports = { 
    getOrders, 
    createOrder,
}