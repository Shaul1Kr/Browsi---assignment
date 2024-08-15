import express from "express";
import publisher from "./publisher";
import domain from "./domain";

const router = express.Router();

router.use("/publishers", publisher);
router.use("/domains", domain);

export default router;
