import express from "express";
import userRoutes from "./user";
export const routes = (dependencies: any) => {
  const routes = express.Router();

  const user = userRoutes(dependencies);

  routes.use("/user", user);
  return routes;
};
