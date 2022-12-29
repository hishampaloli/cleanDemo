import { UserData, UserProfile } from "../../entities";

export const updateUserProfile_UseCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (userId: string, data: any) => {
    return userRepository.updateUserProfile(userId, data);
  };
  return {
    execute,
  };
};
