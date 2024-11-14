import { Request, Response } from "express";
import Post from "../../Post/Post";
import PostController from "../PostControler";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the method get from PostController class", () => {
  describe("When it's receives a response", () => {
    const postCatLover = new Post(
      "I LOVE CATS",
      "",
      "i like cats so much",
      "cat4ever",
    );

    const postCatHater = new Post(
      "I HATE CATS",
      "",
      "i hate cats so much",
      "catsNever03",
    );

    const posts: Post[] = [postCatLover, postCatHater];

    const postController = new PostController(posts);

    const req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status method with status code 200", () => {
      const expectedStatusCode = 200;

      postController.get(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Thent it should call json method with the post 'I LOVE CATS' and 'I HATE CATS'", () => {
      postController.get(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ posts });
    });
  });
});
