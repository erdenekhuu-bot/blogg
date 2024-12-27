import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Post {
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
}
