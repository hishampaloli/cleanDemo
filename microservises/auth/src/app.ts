import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { routes } from "./routes";
import {
  NotAuthorizedError,
  NotFoundError,
  errorHandler,
} from "@hpshops/common/build";

const app = express();

const router = express.Router();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

// app.use("/api", routes(anme));

app.all("*", async (req, res) => {
  console.log(777777777777777);

  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
