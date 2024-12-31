import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";
import multer from "multer";

const prisma = new PrismaClient();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

export class Post {
  static testAPI = async (req: Request, res: Response): Promise<void> => {
    res.send("Hello Erdenee");
  };

  static postList = async (req: Request, res: Response): Promise<void> => {
    try {
      const record = await prisma.post.findMany();
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  static createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const { category, image, title, content } = req.body;

      if (!image || !title || !content || !category) {
        res.status(400).json({ error: "Missing required fields" });
      }

      const findTitle = await prisma.titleItems.findFirstOrThrow({
        where: { title: category },
      });

      const makePost = await prisma.post.create({
        data: {
          image,
          title,
          content,
        },
      });

      const record = await prisma.category.create({
        data: {
          titleId: findTitle.id,
          postId: makePost.id,
        },
      });

      res.status(201).json({ post: makePost, category: record });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  static readPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const record = await prisma.post.findFirstOrThrow({
        where: { id: Number(id) },
      });
    } catch (error) {
      res.status(404).json({ error: "Not found" });
    }
  };

  static imageList = async (req: Request, res: Response): Promise<void> => {
    const directoryPath = path.join(__dirname, "../../images");

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return res.status(500).json({ error: "Unable to scan directory" });
      }

      const imageFiles = files.filter(
        (file) =>
          file.endsWith(".jpeg") ||
          file.endsWith(".jpg") ||
          file.endsWith(".png")
      );
      res.status(200).json(imageFiles);
    });
  };
}
