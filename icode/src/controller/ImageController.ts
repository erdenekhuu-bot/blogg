import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";

const prisma = new PrismaClient();
const upload = multer({ dest: "./images" });

class ImageUpload {
  static getImage = async (req: Request, res: Response): Promise<void> => {
    try {
      const storage = multer.diskStorage();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
