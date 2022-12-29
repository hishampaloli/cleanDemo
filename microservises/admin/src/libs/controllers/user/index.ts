import getProfilesController from "./getProfile.controller";
import updateProfileController from "./updateProfile.controller";

export = (dependencies: any) => {
  return {
    getProfilesController: getProfilesController(dependencies),
    updateProfileController: updateProfileController(dependencies),
  };
};
