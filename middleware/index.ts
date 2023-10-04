import { Application } from "express";
import bodyParserMiddleware from "./bodyParserMiddleware";
import helmetMiddleware from "./helmetMiddleware";
import corsMiddleware from "./corsMiddleware";

const applyMiddleware = (app: Application) => {
  helmetMiddleware(app);
  bodyParserMiddleware(app);
  corsMiddleware(app);
};

export default applyMiddleware;
