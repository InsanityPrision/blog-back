import { type Request, type Response } from "express";
import { type PostControllerStructure } from "./types";
import Post from "../Post/Post.js";
import posts from "../data/index.js";

class PostController implements PostControllerStructure {
  constructor(private readonly posts: Post[]) {}

  get = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.status(statusCode).json({ posts: this.posts });
  };

  post = (req: Request, res: Response): void => {
    const { title, author, content, imageUrl } = req.body as Post;

    const newPost = new Post(title, imageUrl, content, author);

    posts.push(newPost);

    res.status(201).json({ post: newPost });
  };
}

export default PostController;
