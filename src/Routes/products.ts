import { Router } from "express";
import controller from '../Controllers/ProductsController'
const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);
router.post("/", controller.createProduct);
router.patch("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

export { router };