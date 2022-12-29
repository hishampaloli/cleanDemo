import express from "express";
import { currentUser, requireAuth, isAdmin } from "@hpshops/common/build";

import { productController } from "../libs/controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const { createProductController } = productController(dependencies);

  router.post(
    "/product",
    currentUser,
    requireAuth,
    isAdmin,
    createProductController
  );

  return router;
};
