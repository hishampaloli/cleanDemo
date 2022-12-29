import { UserData, UserProfile } from "../../entities";

export const createProfile_UseCase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    name,
    email,
    address,
    image,
    isBlocked,
    userId,
  }: UserData) => {
    const userProfile = new UserProfile({
      name,
      email,
      address,
      image,
      isBlocked,
      userId,
    });
    return userRepository.createUser(userProfile);
  };
  return {
    execute,
  };
};
