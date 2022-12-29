import express from "express";

import { authController } from "../libs/auth/controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const { signUpController } = authController(dependencies);
  router.route("/signup").post(signUpController);

  return router;
};
