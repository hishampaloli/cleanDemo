import {
  userRepository,
  productRepository,
} from "../libs/app/repository/mongo";
import {
  createProfile_UseCase,
  updateUserProfile_UseCase,
  getUserProfiles_UseCase,
  createProduct_UseCase,
} from "../libs/useCases";

const useCases = {
  createProfile_UseCase,
  getUserProfiles_UseCase,
  updateUserProfile_UseCase,
  createProduct_UseCase,
};

const repository = {
  userRepository,
  productRepository,
};

export = {
  useCases,
  repository,
};