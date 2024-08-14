import express from "express";
import { getDomains } from "../controller/domain";

const router = express.Router();

router.get("/", getDomains);

export default router;
