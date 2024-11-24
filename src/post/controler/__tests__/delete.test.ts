import { type Request, type Response } from "express";
import Post from "../../Post/Post";
import PostController from "../PostsControler";

describe("Given the method delete from PostsControler class", () => {
  describe("When it's receives a request", () => {
    test("Then it should call status method with status code 200", () => {
      const expectedStatusCode = 200;

      const post1 = new Post("I like potatoes", "", "potatoLover", {
        imageUrl: "",
        alternativeText: "",
      });

      const post2 = new Post("I like colacao", "", "colacaoLover", {
        imageUrl: "",
        alternativeText: "",
      });

      const req: Partial<Request> = {
        body: {},
      };

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const postsControler = new PostController([post1, post2]);

      postsControler.delete(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
