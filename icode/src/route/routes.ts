import { Router } from "express";
import { Post } from "../controller/PostController";
import { Title } from "../controller/TitleController";
import { Auth } from "../controller/AuthController";

const router = Router();

router.post("/api/createpost", Post.createPost);

router.post("/api/login", Auth.Login);
router.get("/api/userlist", Auth.readUser);
router.get("/api/user/:name", Auth.findUser);
router.post("/api/createuser", Auth.createUser);
router.patch("/api/changeprofile", Auth.updateProfile);
router.delete("/api/deleteuser", Auth.deleteUser);

router.post("/api/title", Title.setTitle);
router.get("/api/titlelist", Title.getTitle);
router.post("/api/subtitle", Title.subItem);
export default router;
