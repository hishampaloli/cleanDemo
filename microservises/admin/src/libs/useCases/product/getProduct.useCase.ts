import { Product, ProductData } from "../../entities";

export const getProduct_UseCase = (dependencies: any) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ productId }: { productId: string }) => {
    console.log(productId);
    
    return productRepository.getProduct(productId);
  };
  return {
    execute,
  };
};
