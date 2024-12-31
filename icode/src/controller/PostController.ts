import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

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
}
