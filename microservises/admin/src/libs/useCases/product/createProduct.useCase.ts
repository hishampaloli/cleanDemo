import { Product, ProductData } from "../../entities";

export const createProduct_UseCase = (dependencies: any) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({
    description,
    image,
    price,
    stock,
    title,
  }: ProductData) => {
    const product = new Product({
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
