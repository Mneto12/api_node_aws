import { Products } from '@prisma/client'
import repository from '../Repositories/ProductRepository'
import { Product } from '../interfaces/Product'

const getProducts = async (): Promise<Products[] | null> => {
    return await repository.getProducts()
}

const getProductById = async (id: string): Promise<Products | null> => {
    return await repository.getProductById(id)
}

const createProduct = async (product: Product): Promise<Product> => {
    return await repository.createProduct(product)
}

const updateProduct = async (id: string, product: Partial<Product>): Promise<Products> => {
    return await repository.updateProduct(id,product)
}

const deleteProduct = async (id: string): Promise<void> => {
    await repository.deleteUser(id)
}

export default module.exports = { 
    getProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}