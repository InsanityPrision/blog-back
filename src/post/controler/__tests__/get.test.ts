import { type Request, type Response } from "express";
import Post from "../../Post/Post";
import PostControler from "../PostsControler";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the method get from PostController class", () => {
  describe("When it's receives a response", () => {
    const postCatLover = new Post(
      "I love potatoes",
      "i like potatoes with katchup so much",
      "potatoes4ever",
      { imageUrl: "", alternativeText: "" },
    );

    const postCatHater = new Post(
      "I hate potatoes",
      "I hate potatoes with katchup, is very disgusting",
      "catsNever03",
      { imageUrl: "", alternativeText: "" },
    );

    const posts: Post[] = [postCatLover, postCatHater];

    const postController = new PostControler(posts);

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
