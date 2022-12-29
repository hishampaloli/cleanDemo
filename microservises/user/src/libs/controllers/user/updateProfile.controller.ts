import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";

export = (dependencies: any): any => {
  const {
    useCases: { updateUserProfile_UseCase },
  } = dependencies;

  const getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userId } = req.params;
      console.log(req.body);

      const userProfile = await updateUserProfile_UseCase(dependencies).execute(
        userId,
        req.body
      );

      if (!userProfile) {
        throw new BadRequestError("No such profile found");
      }

      res.json({ status: true, content: userProfile });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProfile;
};
