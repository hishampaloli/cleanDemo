import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import {
  NotAuthorizedError,
  NotFoundError,
  errorHandler,
} from "@hpshops/common/build";
import cors from "cors";
import depentencies from "./configs/depentencies";
import { routes } from "./routes";

const app = express();

const router = express.Router();

app.set("trust proxy", true);
app.use(json());

app.use("/api", routes(depentencies));

app.all("*", async (req, res) => {
  console.log("??????????????????????????????????");

  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
