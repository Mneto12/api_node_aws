import { Request, Response } from "express";
import service from '../Services/OrderService'

/**
   * Método para obtener todas los ordenes
*/
const getOrders = async (req: Request, res: Response) => {
    const data = await service.getOrders()
    res.send(data);
};

/**
   * Método para crear una orden
   * @param body {productId: string, userId: string}
*/
const createOrder = async ({ body }: Request, res: Response) => {
    const data = await service.createOrder(body)
    res.send(data);
}
  
export default module.exports = { 
    getOrders, 
    createOrder,
}