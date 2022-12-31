import { DepenteniciesData } from "../../entities/interface";

export const updateProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = (productId: string, data: any) => {
    return productRepository.updateProduct(productId, data);
  };
  return {
    execute,
  };
};
