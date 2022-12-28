import express from "express";
import authRoutes from "./auth";
export const routes = (dependencies: any) => {
  const routes = express.Router();

  const auth = authRoutes(dependencies);

  routes.use("/auth", auth);
  return routes;
};
