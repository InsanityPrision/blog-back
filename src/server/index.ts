import express from "express";
import morgan from "morgan";
import postRouter from "../post/router/index.js";
import { handleErrors, handlePathError } from "./errors/middlewares.js";

const app = express();

app.use(morgan("dev"));

app.use("/posts", postRouter);

app.use("/", handlePathError);

app.use(handleErrors);

export default app;
