import { Application } from "express";
import helmet from "helmet";

const helmetMiddleware = (app: Application) => {
  app.use(helmet());
};

export default helmetMiddleware;
