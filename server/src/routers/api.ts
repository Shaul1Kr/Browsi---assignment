import express from "express";
import publisher from "./publisher";

const router = express.Router();

router.use("/publishers", publisher);

export default router;
