// import { productRepository } from "../libs/app/repositories/mongo/index";
// import {
//   createProduct_UseCase,
//   getProduct_UseCase,
//   deleteProduct_UseCase,
//   updateProduct_UseCase,
//   getAllProduct_UseCase,
// } from "../libs/useCases";

// const useCases = {
//   createProduct_UseCase,
//   getProduct_UseCase,
//   deleteProduct_UseCase,
//   getAllProduct_UseCase,
//   updateProduct_UseCase,
// };

// const repository = {
//   productRepository,
// };

// export = {
//   useCases,
//   repository,
// };

export interface DepenteniciesData {
  useCases: UseCaseData;
  repository: RepositoryData;
}

export interface UseCaseData {
  createProduct_UseCase: any;
  getProduct_UseCase: any;
  deleteProduct_UseCase: any;
  getAllProduct_UseCase: any;
  updateProduct_UseCase: any;
}

export interface RepositoryData {
  productRepository: any;
}
