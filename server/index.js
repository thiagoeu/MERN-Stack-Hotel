import express from "express";
import cors from "cors";

import "dotenv/config";
import { connectDb } from "./config/db.js";
import userRouter from "./routes/user.route.js";

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api-v1/users", userRouter);
