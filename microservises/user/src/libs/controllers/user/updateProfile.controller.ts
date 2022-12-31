import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import { ProfileUpdatedPublisher } from "../../../events/publisher/profile-updated-publisher";
import { natsWrapper } from "../../../nats-wrapper";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
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

      await new ProfileUpdatedPublisher(natsWrapper.client).publish({
        userId: userProfile.id,
        address: userProfile.address,
        image: userProfile.image,
      });

      res.json(userProfile);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProfile;
};
