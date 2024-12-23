import { Router } from "express";
import { readRecord, createRecord,filterRecord } from "../controller/controllers";

const router = Router();

router.get("/api/", readRecord.readPost);
router.get("/api/search/:id", filterRecord.filterPost)
router.post("/api/create", createRecord.createPost);

export default router;
