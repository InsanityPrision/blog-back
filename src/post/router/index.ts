import { Router } from "express";
import PostController from "../controller/PostControler.js";
import posts from "../data/index.js";

const postRouter = Router();

const postController = new PostController(posts);

postRouter.get("/", postController.get);

export default postRouter;
