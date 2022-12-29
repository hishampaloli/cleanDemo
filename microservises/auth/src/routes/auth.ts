import express from "express";
import { body, validationResult } from "express-validator";
import {
  validateRequest,
  BadRequestError,
  currentUser,
  requireAuth,
} from "@hpshops/common";

import { authController } from "../libs/auth/controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    signUpController,
    currentuserController,
    signInController,
    signOutController,
  } = authController(dependencies);

  router.post("/signup", signUpController);
  router.post("/signin", signInController);
  router.post("/signout", signOutController);
  router.get("/currentuser", currentUser, requireAuth, currentuserController);

  return router;
};
