import express from "express";
import { requireAuth, isAdmin, currentUser } from "@hpshops/common";

import { productController } from "../libs/controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const { getProductController, getAllProductsController } =
    productController(dependencies);

  router.get("/allProducts", getAllProductsController);
  router.get("/:productId", getProductController);

  return router;
};
