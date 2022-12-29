import { UserData, User } from "../../entities";

export const getUser_UseCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ name, password, email }: UserData) => {
    const user = new User({ name, password, email });
    return userRepository.getUser(user);
  };
  return {
    execute,
  };
};
