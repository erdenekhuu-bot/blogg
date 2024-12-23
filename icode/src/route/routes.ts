import { Router } from "express";
import { userController } from "../controller/controllers";

const router = Router();

router.get("/api/user", userController.getUser);

export default router;
