import { Router } from "express";
import controller from '../Controllers/Third-party-services/AwsController'
const router = Router();

router.get("/:KeyFile", controller.getFile);
router.get("/", controller.uploadFile)

export { router };