import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Post {
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
      const { image, title, content } = req.body;

      if (!image || !title || !content) {
        res.status(400).json({ error: "Missing required fields" });
      }

      res.status(200).json({ image, title, content });
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
