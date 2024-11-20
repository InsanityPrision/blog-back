import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  preset: "ts-jest",
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "**/*.ts",
    "!index.ts",
    "!server/startServer.ts",
    "!post/data/index.ts",
  ],
  resolver: "ts-jest-resolver",
  ...createDefaultPreset(),
};

export default jestConfig;
