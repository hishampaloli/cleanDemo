import express from "express";
import { body, validationResult } from "express-validator";
import {
  validateRequest,
  BadRequestError,
  currentUser,
  requireAuth,
  isOwner,
} from "@hpshops/common";

import { userController } from "../libs/controllers";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getProfileController, updateProfileController } =
    userController(dependencies);

  router.get(
    "/:userId",
    currentUser,
    requireAuth,
    isOwner,
    getProfileController
  );
  router.post(
    "/:userId",
    currentUser,
    requireAuth,
    isOwner,
    updateProfileController
  );

  return router;
};
