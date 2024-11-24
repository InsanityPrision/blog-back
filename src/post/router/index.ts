import { Router } from "express";
import PostControler from "../controler/PostsControler.js";
import posts from "../data/index.js";

const postRouter = Router();

const postController = new PostControler(posts);

postRouter.get("/", postController.get);

postRouter.post("/", postController.post);

export default postRouter;
