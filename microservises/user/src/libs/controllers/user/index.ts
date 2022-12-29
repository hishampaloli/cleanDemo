import getProfileController from "./getProfile.controller";
import updateProfileController from "./updateProfile.controller";

export = (dependencies: any) => {
  return {
    getProfileController: getProfileController(dependencies),
    updateProfileController: updateProfileController(dependencies),
  };
};
