import express from "express";
import { createPublisher, getPublishers } from "../controller/publisher";

const router = express.Router();

router.get("/", getPublishers);
router.post("/", createPublisher);

export default router;
