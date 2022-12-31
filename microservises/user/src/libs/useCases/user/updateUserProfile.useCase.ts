import { UserData, UserProfile } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const updateUserProfile_UseCase = (dependencies: DepenteniciesData) => {
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
