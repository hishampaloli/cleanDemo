import createProductController from "./createProduct.controller";
import getProductController from "./getProduct.controller";
import deleteProductController from "./deleteProduct.controller";
import updateProductController from "./updateProduct.controller";

export = (dependencies: any) => {
  return {
    createProductController: createProductController(dependencies),
    getProductController: getProductController(dependencies),
    deleteProductController: deleteProductController(dependencies),
    updateProductController: updateProductController(dependencies),
  };
};
