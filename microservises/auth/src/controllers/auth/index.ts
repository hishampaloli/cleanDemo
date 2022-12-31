import signUpController from "./signUp.controller";
import currentuserController from "./currentuser.controller";
import signInController from "./signIn.controller";
import signOutController from "./signOut.controller";

export = (dependencies: any) => {
  return {
    signUpController: signUpController(dependencies),
    currentuserController: currentuserController(dependencies),
    signInController: signInController(dependencies),
    signOutController: signOutController(dependencies),
  };
};
