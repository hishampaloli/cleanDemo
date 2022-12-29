import createProductController from "./createProduct.controller";

export = (dependencies: any) => {
  return {
    createProductController: createProductController(dependencies),
  };
};
