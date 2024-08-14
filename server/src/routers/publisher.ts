import express from "express";
import {
  createPublisher,
  deletePublisher,
  getPublishers,
  updatePublisher,
} from "../controller/publisher";

const router = express.Router();

router.get("/", getPublishers);
router.post("/", createPublisher);
router.put("/", updatePublisher);
router.delete("/", deletePublisher);

export default router;
