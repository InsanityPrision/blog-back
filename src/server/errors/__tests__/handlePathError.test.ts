import { type NextFunction, type Request, type Response } from "express";
import { handlePathError } from "../middlewares";
import ServerError from "../ServerError/ServerError";

describe("Given the handlePathError function", () => {
  describe("When it receives a request with a endpoint that does not exist", () => {
    test("Then it should call next function with a error with status code 404 and message 'Endpoint not found'", () => {
      const statusCode = 404;
      const message = "Endpoint not found";

      const error = new ServerError(statusCode, message);

      const req = {};
      const res = {};
      const next: NextFunction = jest.fn();

      handlePathError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
