import express from "express";
import { getPublishers } from "../controller/publisher";

const router = express.Router();

router.get("/", getPublishers);

export default router;
