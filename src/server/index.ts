import express from "express";
import morgan from "morgan";
import cors from "cors";
import postRouter from "../post/router/index.js";
import { handleErrors, handleEndpointNotFound } from "./errors/middlewares.js";

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/posts", postRouter);

app.use(handleEndpointNotFound);

app.use(handleErrors);

export default app;
