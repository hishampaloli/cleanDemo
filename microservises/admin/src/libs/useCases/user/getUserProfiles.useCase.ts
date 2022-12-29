import { UserData, UserProfile } from "../../entities";

export const getUserProfiles_UseCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = () => {
    return userRepository.getUserProfiles();
  };
  return {
    execute,
  };
};
