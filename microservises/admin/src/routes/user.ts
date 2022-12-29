import express from "express";
import { currentUser, requireAuth, isAdmin } from "@hpshops/common/build";

import { userController } from "../libs/controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const { getProfilesController, updateProfileController } =
    userController(dependencies);

  router.get(
    "/allusers",
    currentUser,
    requireAuth,
    isAdmin,
    getProfilesController
  );

  router.patch(
    "/block/:userId",
    currentUser,
    requireAuth,
    isAdmin,
    updateProfileController
  );

  return router;
};
