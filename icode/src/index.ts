import express, { Request, Response } from "express";
import { Prisma } from "@prisma/client";

const app = express();

app.get("/api/", function (req: Request, res: Response) {
  res.json({
    data: "Success",
  });
});

app.post("/api/create", function (req: Request, res: Response) {
  res.json({
    data: "success",
  });
});

app.patch("/api/update", function (req: Request, res: Response) {
  res.json({ data: "success" });
});

app.delete("/api/delete", function (req: Request, res: Response) {
  res.json({ data: "success" });
});

app.listen(3000, () => {
  console.log("REST API listening on 3000 porn ...");
});
