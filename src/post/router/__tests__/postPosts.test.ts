import request from "supertest";
import app from "../../../server";
import type Post from "../../Post/Post";

describe("Given the POST /posts endpoint", () => {
  describe("When it receives a request with the title 'unodostres ya no me ves'", () => {
    test("Then it should response with status 201 and a new post with the title 'undostres ya no me ves'", async () => {
      const expectedStatusCode = 201;

      const postData: Omit<Post, "id" | "date"> = {
        title: "Me gustan las patatas",
        content: "Las patatas fritas me gustan mucho",
        imageUrl: "",
        alternativeText: "",
        author: "",
      };

      const response = await request(app)
        .post("/posts")
        .send(postData)
        .expect(expectedStatusCode);

      const responseBody = response.body as { post: Post };

      expect(responseBody.post.title).toBe(postData.title);
    });
  });
});
