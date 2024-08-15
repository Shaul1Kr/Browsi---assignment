import express from "express";
import { createDomain, getDomains } from "../controller/domain";

const router = express.Router();

router.get("/", getDomains);
router.post("/", createDomain);

export default router;
