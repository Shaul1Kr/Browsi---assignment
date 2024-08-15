import express from "express";
import {
  createDomain,
  deleteDomain,
  getDomains,
  updateDomain,
} from "../controller/domain";

const router = express.Router();

router.get("/", getDomains);
router.post("/", createDomain);
router.put("/:id", updateDomain);
router.delete("/:id", deleteDomain);

export default router;
