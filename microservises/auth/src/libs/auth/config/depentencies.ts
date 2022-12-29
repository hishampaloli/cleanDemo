import { userRepository } from "../app/repository/mongo";
import { getUser_UseCase, signUp_UseCase } from "../useCases";
// const hi = useCases.getUser_UseCase;
// const;
const useCases = {
  getUser_UseCase,
  signUp_UseCase,
};

const repository = {
  userRepository,
};

export = {
  useCases,
  repository,
};
