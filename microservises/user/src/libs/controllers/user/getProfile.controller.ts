import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getUserProfile_UseCase },
  } = dependencies;

  const getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userId } = req.params;
      const userProfile = await getUserProfile_UseCase(dependencies).execute({
        userId,
      });

      if (!userProfile) {
        throw new BadRequestError("No such profile found");
      }

      res.json(userProfile);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProfile;
};
