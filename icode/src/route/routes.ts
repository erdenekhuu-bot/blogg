import { Router } from "express";
import { Post } from "../controller/PostController";
import { Title } from "../controller/TitleController";
import { Auth } from "../controller/AuthController";
import { authentication } from "../middleware/middlewares";

const router = Router();

router.post("/api/createpost", authentication, Post.createPost);

router.post("/api/login", Auth.Login);
router.get("/api/userlist", authentication, Auth.readUser);
router.get("/api/user/:name", Auth.findUser);
router.post("/api/createuser", Auth.createUser);
router.patch("/api/changeprofile", authentication, Auth.updateProfile);
router.delete("/api/deleteuser", Auth.deleteUser);

router.post("/api/title", authentication, Title.setTitle);
router.get("/api/titlelist", authentication, Title.getTitle);
router.post("/api/subtitle", authentication, Title.subItem);
export default router;
