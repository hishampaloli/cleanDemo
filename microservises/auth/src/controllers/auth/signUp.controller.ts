import e, { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import generateToken from "../../libs/utils/jsonwebtoken";
import { UserRegisteredPublisher } from "../../events/publishers/user-registered-publisher";
import { natsWrapper } from "../../nats-wrapper";
import { DepenteniciesData } from "../../libs/entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { signUp_UseCase, getUser_UseCase },
  } = dependencies;

  const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

      if (!name) throw new BadRequestError("Please provide a name");
      if (!email) throw new BadRequestError("Please provide a email");
      if (!password) throw new BadRequestError("Please provide a password");

      const userPresent = await getUser_UseCase(dependencies).execute({
        name,
        email,
        password,
      });

      console.log(userPresent + "////\\\\");
      if (userPresent.length) {
        throw new BadRequestError("Email already in use !");
      }

      const addedUser = await signUp_UseCase(dependencies).execute({
        name,
        email,
        password,
      });

      const token: any = generateToken(addedUser);

      req.session = {
        jwt: token,
        userDetails: addedUser,
      };

      await new UserRegisteredPublisher(natsWrapper.client).publish({
        userId: addedUser.id,
        email: addedUser.email,
        name: addedUser.name,
        version: 1,
      });

      res.json(addedUser);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return signUp;
};
