import cors, { CorsOptions } from "cors";
import { Application, Request } from "express";

const origin = [
  "http://localhost:5173",
  "https://week15-api-avicena-dev.cyclic.cloud",
  "https://week15.avicena.dev",
];
const partnerOrigin = ["http://localhost:5174"];

const corsOptionsDelegate = (
  req: Request | any,
  callback: (err: Error | null, options?: CorsOptions) => void
) => {
  const clientOrigin = origin.includes(req.header("Origin"));
  const clientPartnerOrigin = partnerOrigin.includes(req.header("Origin"));

  if (clientOrigin) {
    callback(null, {
      origin: true,
      methods: "GET,POST,DELETE,PUT,OPTIONS,HEAD",
    });
  } else if (clientPartnerOrigin) {
    callback(null, {
      origin: true,
      methods: "GET,POST",
    });
  } else {
    callback(new Error("Not allowed by CORS"));
  }
};

const corsMiddleware = (app: Application) => {
  app.use(cors(corsOptionsDelegate));
};

export default corsMiddleware;
