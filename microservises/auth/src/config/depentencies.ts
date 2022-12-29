import { userRepository } from "../libs/app/repository/mongo";
import {
  getUser_UseCase,
  signUp_UseCase,
  signIn_UseCase,
} from "../libs/useCases";

const useCases = {
  getUser_UseCase,
  signUp_UseCase,
  signIn_UseCase,
};

const repository = {
  userRepository,
};

export = {
  useCases,
  repository,
};
