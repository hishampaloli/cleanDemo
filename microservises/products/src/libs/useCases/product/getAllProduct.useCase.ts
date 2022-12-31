import { Product, ProductData } from "../../entities";
import { DepenteniciesData } from "../../entities/interface";

export const getAllProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = () => {
    return productRepository.getAllProduct();
  };
  return {
    execute,
  };
};
