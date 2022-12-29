import { UserData, User } from "../../entities";

export const signIn_UseCase = (dependencies: any) => {
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
