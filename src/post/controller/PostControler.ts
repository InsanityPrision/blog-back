import { type Request, type Response } from "express";
import { type PostControllerStructure } from "./types";
import posts from "../data";

class PostController implements PostControllerStructure {
  get(_req: Request, res: Response): void {
    const statusCode = 200;

    res.status(statusCode).json({ posts });
  }
}

export default PostController;
