import { type NextFunction, type Request, type Response } from "express";
import { handleEndpointNotFound } from "../middlewares";
import ServerError from "../ServerError/ServerError";

describe("Given the handleEndpointNotFound function", () => {
  describe("When it's called", () => {
    test("Then it should call next function with a error with status code 404 and message 'Endpoint not found'", () => {
      const statusCode = 404;
      const message = "Endpoint not found";

      const error = new ServerError(message, statusCode);

      const req = {};
      const res = {};
      const next: NextFunction = jest.fn();

      handleEndpointNotFound(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
