import { Router } from "express";
import PostController from "../controller/PostControler.js";

const postRouter = Router();

const postController = new PostController();

postRouter.get("/", postController.get);

export default postRouter;
