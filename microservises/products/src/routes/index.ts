import express from "express";
import { DepenteniciesData } from "../libs/entities/interface";
import productRoutes from "./product.routes";

export const routes = (dependencies: DepenteniciesData) => {
  const routes = express.Router();

  routes.use("/product", productRoutes(dependencies));
  return routes;
};
