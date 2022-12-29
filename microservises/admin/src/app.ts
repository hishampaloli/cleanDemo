import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  NotAuthorizedError,
  NotFoundError,
  errorHandler,
} from "@hpshops/common/build";
import { routes } from "./routes";
import depentencies from "./config/depentencies";

const app = express();

const router = express.Router();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.use("/api", routes(depentencies));

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
