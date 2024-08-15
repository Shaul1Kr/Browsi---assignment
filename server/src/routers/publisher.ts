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
router.put("/:id", updatePublisher);
router.delete("/:id", deletePublisher);

export default router;
