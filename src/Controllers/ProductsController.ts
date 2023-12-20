import { Request, Response } from "express";
import service from '../Services/ProductService'

/**
   * Método para obtener todos los productos
*/
const getProducts = async (req: Request, res: Response) => {
    const data = await service.getProducts()
    res.send(data);
};

/**
   * Método para obtener un producto por su ID
   * @param id
*/
const getProductById = async ({ params }: Request, res: Response) => {
    const { id } = params
    const data = await service.getProductById(id)
    res.send(data);
};

/**
   * Método para crear un producto
   * @param body {name: string, description: string, price: number, imgUrl: string}
*/
const createProduct = async ({ body }: Request, res: Response) => {
    const data = await service.createProduct(body)
    res.send(data);
}

/**
   * Método para editar un producto
   * @param body
   * @param id
*/
const updateProduct = async ({ params, body }: Request, res: Response) => {
    const { id } = params
    const data = await service.updateProduct(id, body)
    res.send(data);
}

/**
   * Método para eliminar un producto
   * @param id
*/
const deleteProduct = async ({ params }: Request, res: Response) => {
    const { id } = params
    const data = await service.deleteProduct(id)
    res.send(data);
}
  
export default module.exports = { 
    getProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}