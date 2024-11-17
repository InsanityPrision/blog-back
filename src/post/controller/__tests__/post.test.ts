import { type Request, type Response } from "express";
import Post from "../../Post/Post";
import PostController from "../PostControler";

describe("Given the method post of PostController", () => {
  describe("When it receives a request", () => {
    const post1 = new Post("I like cats", "", "", "LoverCats04");

    const post2 = new Post("I hate cats", "", "", "HaterCats04");

    const postController = new PostController([post1, post2]);

    const req: Partial<Request> = {
      body: {},
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status method from response with status 201", () => {
      const expectedStatusCode = 201;

      postController.post(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method", () => {
      postController.post(req as Request, res as Response);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
