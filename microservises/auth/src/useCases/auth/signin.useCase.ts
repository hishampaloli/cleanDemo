import { UserData, User } from "../../libs/entities";
import { DepenteniciesData } from "../../libs/entities/interfaces";

export const signIn_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ password, email }: UserData) => {
    const userCredential = { password, email };
    return userRepository.signIn(userCredential);
  };
  return {
    execute,
  };
};
