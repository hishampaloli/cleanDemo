import { userRepository } from "../app/repository/mongo";
import { getUser_UseCase, signUp_UseCase, signIn_UseCase } from "../useCases";


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
