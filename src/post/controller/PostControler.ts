import { type Request, type Response } from "express";
import { type PostControllerStructure } from "./types";
import type Post from "../Post/Post";

class PostController implements PostControllerStructure {
  constructor(private readonly posts: Post[]) {}

  get = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.status(statusCode).json({ posts: this.posts });
  };
}

export default PostController;
