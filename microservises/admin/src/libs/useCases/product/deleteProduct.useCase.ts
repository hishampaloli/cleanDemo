import { Product, ProductData } from "../../entities";

export const deleteProduct_UseCase = (dependencies: any) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ productId }: { productId: string }) => {
    return productRepository.deleteProduct(productId);
  };
  return {
    execute,
  };
};
