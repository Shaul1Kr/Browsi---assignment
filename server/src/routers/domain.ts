import express from "express";
import { createDomain, getDomains, updateDomain } from "../controller/domain";

const router = express.Router();

router.get("/", getDomains);
router.post("/", createDomain);
router.put("/:id", updateDomain);

export default router;
