import { type Request, type Response } from "express";

export interface PostControllerStructure {
  get: (_req: Request, res: Response) => void;
}
