import signUpController from "./signUp.controller";
export = (dependencies: any) => {
  return {
    signUpController: signUpController(dependencies),
  };
};
