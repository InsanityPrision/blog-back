import request from "supertest";
import app from "../../../server";
import type Post from "../../Post/Post";

describe("Given the GET /posts endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with the status 200 and a list of posts with the following titles: 'I like cats' and 'I hate cats'", async () => {
      const expectedStatusCode = 200;
      const expectedTitlePost1 = "I like cats";
      const expectedTitlePost2 = "I hate cats";

      const response = await request(app)
        .get("/posts")
        .expect(expectedStatusCode);

      const responseBody = response.body as { posts: Post[] };

      expect(responseBody.posts).toMatchObject<Array<Partial<Post>>>([
        {
          title: expectedTitlePost1,
        },
        {
          title: expectedTitlePost2,
        },
      ]);
    });
  });
});
