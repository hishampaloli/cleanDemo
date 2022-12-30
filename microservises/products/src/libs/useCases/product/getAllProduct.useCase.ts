import { Product, ProductData } from "../../entities";

export const getAllProduct_UseCase = (dependencies: any) => {
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
