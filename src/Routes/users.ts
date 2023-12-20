import { Router } from "express";
import controller from '../Controllers/UsersContoller'
const router = Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);
router.patch("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

export { router };