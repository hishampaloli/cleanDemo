import { UserData, UserProfile } from "../../entities";

export const getUserProfile_UseCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ userId }: { userId: string }) => {
    return userRepository.getUserProfile(userId);
  };
  return {
    execute,
  };
};
