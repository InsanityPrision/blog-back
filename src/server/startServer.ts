import chalk from "chalk";
import { type Express } from "express";

const startServer = (port: number, app: Express): void => {
  app.listen(port, () => {
    console.log(chalk.green(`Serving in https://localhost:${port}`));
  });
};

export default startServer;
