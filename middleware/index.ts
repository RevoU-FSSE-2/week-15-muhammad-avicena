import { Application } from "express";
import bodyParserMiddleware from "./bodyParserMiddleware";
import helmetMiddleware from "./helmetMiddleware";
import corsMiddleware from "./corsMiddleware";
import morganMiddleware from "./morganMiddleware";

const applyMiddleware = (app: Application) => {
  helmetMiddleware(app);
  bodyParserMiddleware(app);
  corsMiddleware(app);
  morganMiddleware(app);
};

export default applyMiddleware;
