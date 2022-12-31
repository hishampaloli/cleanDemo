import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common/build";

export = (dependencies: any): any => {
  const {
    useCases: { getUserProfiles_UseCase },
  } = dependencies;

  const getProfiles = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userProfile = await getUserProfiles_UseCase(dependencies).execute();

      if (!userProfile) {
        throw new BadRequestError("No such profile found");
      }

      res.json(userProfile);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProfiles;
};
