import express from "express";
import morgan from "morgan";
import postRouter from "../post/router/index.js";

const app = express();

app.use(morgan("dev"));

app.use("/posts", postRouter);

export default app;
