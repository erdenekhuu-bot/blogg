import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";
import { verify } from "jsonwebtoken";
import { prisma } from "../controller/AuthController";

export interface ExpressRequest extends Request {
  user?: User;
}

export class Authentication {
  static layer = async (
    req: ExpressRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const authHeader: any = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const token = authHeader.split(" ")[1];

    try {
      const decode = verify(
        token,
        "JWT_SECRET_Mongol@google12_erdenee_hello_world"
      ) as {
        email: string;
      };
      const record: any = await prisma.user.findUnique({
        where: { email: decode.email },
      });
      req.user = record;
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  };
}
