import { type Request, type Response } from "express";
import { type PostsControlerStructure } from "./types";
import Post from "../Post/Post.js";
import ServerError from "../../server/errors/ServerError/ServerError.js";

class PostController implements PostsControlerStructure {
  constructor(private readonly posts: Post[]) {}

  get = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.status(statusCode).json({ posts: this.posts });
  };

  post = (req: Request, res: Response): void => {
    const { title, author, content, imageUrl, alternativeText } =
      req.body as Post;

    const newPost = new Post(title, content, author, {
      imageUrl,
      alternativeText,
    });

    this.posts.push(newPost);

    res.status(201).json({ post: newPost });
  };

  delete = (req: Request, res: Response): void => {
    const postId = req.params.id;

    const post = this.posts.findIndex((post) => post.id === postId);

    if (post === -1) {
      throw new ServerError("ID not found", 404);
    }

    this.posts.splice(post, 1);

    res.status(200).json({ message: "Post deleted" });
  };
}

export default PostController;
