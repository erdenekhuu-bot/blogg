import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createRecord = {
  createPost: async (req: Request, res: Response) => {
    try {
      const record = await prisma.record.create({
        data: req.body,
      });
      res.json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export const readRecord = {
  readPost: async (req: Request, res: Response) => {
    try {
      const record = await prisma.record.findMany();
      res.json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export const filterRecord = {
  filterPost: async (req: Request, res: Response) => {
    try {
      const record = await prisma.record.findOne({
        where: req.body,
      });
      res.json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export const updateRecord = {
  updatePost: async (req: Request, res: Response) => {
    try {
      const record = await prisma.record.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};


export const deleteRecord = {
  deletePost: async (req: Request, res: Response) => {
    try {
      const record = await prisma.record.delete({
        where: { id: req.params.id },
      });
      res.json(record);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
