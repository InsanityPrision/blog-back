import { type NextFunction, type Request, type Response } from "express";
import { handleErrors } from "../middlewares";
import ServerError from "../ServerError/ServerError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the handleErrors middleware", () => {
  const req = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a server error with status code 404 and message 'Endpoint not found'", () => {
    const error = new ServerError("Endpoint not found", 404);

    test("Then it should call status method with status code 404", () => {
      const expectedStatusCode = 404;

      handleErrors(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with a message 'Endpoint not found'", () => {
      handleErrors(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ error: "Endpoint not found" });
    });
  });

  describe("When receives a error with message 'TypeError'", () => {
    const error = new ServerError("Server error", 500);

    test("Then it should call status method with status code 500", () => {
      handleErrors(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(500);
    });

    test("Then it should call json method with message 'Server error'", () => {
      handleErrors(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ error: "Server error" });
    });
  });
});
