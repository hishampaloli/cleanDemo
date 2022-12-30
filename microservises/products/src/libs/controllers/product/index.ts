import getProductController from "./getProduct.controller";
import getAllProductsController from "./getAllProducts.controller";

export = (dependencies: any) => {
  return {
    getProductController: getProductController(dependencies),
    getAllProductsController: getAllProductsController(dependencies),
  };
}