import { Product, ProductData } from "../../entities";
import { DepenteniciesData } from "../../entities/interface";

export const createProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({
    description,
    image,
    price,
    id,
    stock,
    title,
  }: ProductData) => {
    const product = new Product({
      id,
      description,
      image,
      price,
      stock,
      title,
    });
    return productRepository.createProduct(product);
  };
  return {
    execute,
  };
};
