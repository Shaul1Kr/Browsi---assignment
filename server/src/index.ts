import express, { Express } from "express";
import mongoose from "mongoose";
import api from "./routers/api";
import cors from "cors";

const app: Express = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/api", api);

mongoose
  .connect(
    "mongodb+srv://shauli:1234@cluster0.apsq625.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { dbName: "browsi" }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
