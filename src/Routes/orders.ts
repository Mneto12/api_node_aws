import { Router } from "express";
import controller from '../Controllers/OrderController'
const router = Router();

router.get("/", controller.getOrders);
router.post("/", controller.createOrder);

export { router };