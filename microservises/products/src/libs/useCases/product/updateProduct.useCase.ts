export const updateProduct_UseCase = (dependencies: any) => {
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
