import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Title {
  static setTitle = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title } = req.body;
      const record = await prisma.title.create({
        data: { title: title },
      });
      res.status(201).json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  static getTitle = async (req: Request, res: Response): Promise<void> => {
    try {
      const record = await prisma.title.findMany({
        include: {
          items: true,
        },
      });
      res.status(200).json(record);
    } catch (error) {
      res.status(404).json({ error: "Not found" });
    }
  };

  static subItem = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, content } = req.body;
      const record = await prisma.title.findMany({
        where: { title: name },
      });
      const newTitleItem = await prisma.titleItems.create({
        data: {
          content: content,
          titleId: record[0].id,
        },
      });

      res.status(201).json(newTitleItem);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  static category = async (req: Request, res: Response) => {
    try {
      const record = await prisma.titleItems.findMany();
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
