import express from "express";
import {
  createPublisher,
  getPublishers,
  updatePublisher,
} from "../controller/publisher";

const router = express.Router();

router.get("/", getPublishers);
router.post("/", createPublisher);
router.put("/", updatePublisher);

export default router;
