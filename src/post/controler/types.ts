import { type Request, type Response } from "express";

export interface PostsControlerStructure {
  get: (_req: Request, res: Response) => void;
  post: (req: Request, res: Response) => void;
}
