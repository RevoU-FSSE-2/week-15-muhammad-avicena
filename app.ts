import "dotenv/config";
import express, { Application } from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";

const app: Application = express();
const PORT: number = parseInt(<string>process.env.PORT, 10) || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use(routes);

// App listeners
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

export default app;
