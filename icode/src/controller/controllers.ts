import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const userController = {
  getUser: async (req: Request, res: Response) => {
    try {
        res.json({
            data: "success",
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        });
    }
  },
};

