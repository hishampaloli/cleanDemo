import { userRepository } from "../app/repository/mongo";
import { repositoryData, useCaseData } from "../libs/entities/interfaces";
import { getUser_UseCase, signUp_UseCase, signIn_UseCase } from "../useCases";

const useCases: useCaseData = {
  getUser_UseCase,
  signUp_UseCase,
  signIn_UseCase,
};

const repository: repositoryData = {
  userRepository,
};

export = {
  useCases,
  repository,
};
