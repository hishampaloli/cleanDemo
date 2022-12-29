import { userRepository } from "../libs/app/repository/mongo";
import {
  createProfile_UseCase,
  getUserProfile_UseCase,
  updateUserProfile_UseCase,
} from "../libs/useCases";

const useCases = {
  createProfile_UseCase,
  getUserProfile_UseCase,
  updateUserProfile_UseCase,
};

const repository = {
  userRepository,
};

export = {
  useCases,
  repository,
};
