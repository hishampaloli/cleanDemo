import {
  userRepository,
  productRepository,
} from "../libs/app/repository/mongo";
import {
  createProfile_UseCase,
  updateUserProfile_UseCase,
  getUserProfiles_UseCase,
  createProduct_UseCase,
  getProduct_UseCase,
  deleteProduct_UseCase,
  updateProduct_UseCase,
} from "../libs/useCases";

const useCases: any = {
  createProfile_UseCase,
  getUserProfiles_UseCase,
  updateUserProfile_UseCase,
  createProduct_UseCase,
  getProduct_UseCase,
  deleteProduct_UseCase,
  updateProduct_UseCase,
};

const repository: any = {
  userRepository,
  productRepository,
};

export = {
  useCases,
  repository,
};
