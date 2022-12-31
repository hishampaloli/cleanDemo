import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import userRoutes from "./user";
export const routes = (dependencies: DepenteniciesData) => {
  const routes = express.Router();

  const user = userRoutes(dependencies);

  routes.use("/user", user);
  return routes;
};
