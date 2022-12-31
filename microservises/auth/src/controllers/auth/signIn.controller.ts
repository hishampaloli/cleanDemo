import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import generateToken from "../../libs/utils/jsonwebtoken";
import { DepenteniciesData } from "../../libs/entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { signIn_UseCase, getUser_UseCase },
  } = dependencies;

  const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email) throw new BadRequestError("Please provide a email");
      if (!password) throw new BadRequestError("Please provide a password");

      const addedUser = await signIn_UseCase(dependencies).execute({
        email,
        password,
      });

      if (!addedUser) throw new BadRequestError("Invalid Credentials");

      const token: any = generateToken(addedUser);

      req.session = {
        jwt: token,
        userDetails: addedUser,
      };

      res.json(addedUser);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return signIn;
};
