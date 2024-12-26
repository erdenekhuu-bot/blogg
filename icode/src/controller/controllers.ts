import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DemoController {
  static readUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const record = await prisma.user.findMany();
      res.status(200).json(record);
    } catch (error) {
      res.status(404).json({ error: error });
    }
  };

  static findUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const record = await prisma.user.findFirstOrThrow({
        where: { id: Number(id) },
      });
      if (!record) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  static createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, name, password } = req.body;

      if (!email || !name || !password) {
        res.status(400).json({ error: "Missing required fields" });
      }

      const record = await prisma.user.create({
        data: {
          email,
          name,
          password,
        },
      });

      res.status(201).json(record);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  static updateProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;

      if (!name) {
        res.status(400).json({ error: "Name is required" });
        return;
      }
      const data: any = {};
      if (email) data.email = email;
      if (name) data.name = name;
      if (password) data.password = password;
      const record = await prisma.user.update({
        where: { name: String(name) },
        data: data,
      });
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  static createTitle = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title } = req.body;
      if (!title) {
        res.status(400).json({ error: "Missing required fields" });
      }
      const record = await prisma.title.create({
        data: {
          title,
        },
      });
      res.status(201).json(record);
    } catch (error) {
      res.status(500).json({ error: error });
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

  static deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name } = req.body;
      const record = await prisma.user.findFirstOrThrow({
        where: { name: String(name) },
      });
      await prisma.user.delete({
        where: { id: record.id },
      });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
}
