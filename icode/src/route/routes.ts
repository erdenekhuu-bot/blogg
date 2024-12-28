import { Router } from "express";
import { Post } from "../controller/PostController";
import { Title } from "../controller/TitleController";
import { Auth } from "../controller/AuthController";
import { Authentication } from "../middleware/middlewares";

const router = Router();

router.post("/api/createpost", Authentication.layer, Post.createPost);
router.get("/api/listpost", Authentication.layer, Post.postList);
router.get("/api/post/:id", Authentication.layer, Post.readPost);

router.post("/api/login", Auth.Login);
router.get("/api/userlist", Authentication.layer, Auth.readUser);
router.get("/api/user/:name", Auth.findUser);
router.post("/api/createuser", Auth.createUser);
router.patch("/api/changeprofile", Authentication.layer, Auth.updateProfile);
router.delete("/api/deleteuser", Auth.deleteUser);

router.post("/api/title", Authentication.layer, Title.setTitle);
router.get("/api/titlelist", Authentication.layer, Title.getTitle);
router.post("/api/subtitle", Authentication.layer, Title.subItem);
export default router;
