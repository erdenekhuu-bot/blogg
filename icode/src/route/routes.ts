import { Router } from "express";
import { DemoController } from "../controller/controllers";

const router = Router();

router.get("/api/userlist", DemoController.readUser);
router.get("/api/user/:id", DemoController.findUser);
router.post("/api/createuser", DemoController.createUser);
router.post("/api/createtitle", DemoController.createTitle);
router.post("/api/createpost", DemoController.createPost);
router.patch("/api/changeprofile", DemoController.updateProfile);
router.delete("/api/deleteuser", DemoController.deleteUser);
export default router;
