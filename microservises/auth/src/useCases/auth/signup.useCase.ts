import { UserData, User } from "../../libs/entities";
import { DepenteniciesData } from "../../libs/entities/interfaces";

export const signUp_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ name, password, email }: UserData) => {
    const user = new User({ name, password, email });
    return userRepository.signUp(user);
  };
  return {
    execute,
  };
};
