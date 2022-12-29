import express from "express";
import { currentUser, requireAuth, isAdmin } from "@hpshops/common/build";

import { productController } from "../libs/controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createProductController,
    getProductController,
    deleteProductController,
    updateProductController,
  } = productController(dependencies);

  router.post(
    "/product",
    currentUser,
    requireAuth,
    isAdmin,
    createProductController
  );

  router.get(
    "/product/:productId",
    currentUser,
    requireAuth,
    isAdmin,
    getProductController
  );

  router.delete(
    "/product/:productId",
    currentUser,
    requireAuth,
    isAdmin,
    deleteProductController
  );

  router.put(
    "/product/:productId",
    currentUser,
    requireAuth,
    isAdmin,
    updateProductController
  );

  return router;
};
