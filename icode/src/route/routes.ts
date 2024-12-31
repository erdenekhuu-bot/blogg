import { Router } from "express";
import { Post } from "../controller/PostController";
import { Title } from "../controller/TitleController";
import { Auth } from "../controller/AuthController";
import { Authentication } from "../middleware/middlewares";
import multer from "multer";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/api/test", Post.testAPI);

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
router.get("/api/category", Authentication.layer, Title.category);
router.get("/api/titlelist", Authentication.layer, Title.getTitle);
router.post("/api/subtitle", Authentication.layer, Title.subItem);

router.get("/api/imagelist", Authentication.layer, Post.imageList);
router.post(
  "/api/savefile",
  Authentication.layer,
  upload.single("image"),
  (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// router.get("/api/imagelist", (req: Request, res: Response) => {
//   const directoryPath = path.join(__dirname, "../../images");

//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: "Unable to scan directory" });
//     }

//     const imageFiles = files.filter(
//       (file) =>
//         file.endsWith(".jpeg") || file.endsWith(".jpg") || file.endsWith(".png")
//     );
//     res.status(200).json(imageFiles);
//   });
// });
export default router;
