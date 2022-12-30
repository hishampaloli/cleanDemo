import { productRepository } from "../libs/app/repositories/mongo/index";
import {
  createProduct_UseCase,
  getProduct_UseCase,
  deleteProduct_UseCase,
  updateProduct_UseCase,
  getAllProduct_UseCase,
} from "../libs/useCases";

const useCases = {
  createProduct_UseCase,
  getProduct_UseCase,
  deleteProduct_UseCase,
  getAllProduct_UseCase,
  updateProduct_UseCase,
};

const repository = {
  productRepository,
};

export = {
  useCases,
  repository,
};
