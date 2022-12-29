import e, { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import generateToken from "../../../utils/jsonwebtoken";
import { CommonResponse } from "../../../utils/Response";

export = (dependencies: any): any => {
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

      if (!addedUser) throw new BadRequestError("Invalid Credentials") 

      const token: any = generateToken(addedUser);

      req.session = {
        jwt: token,
        userDetails: addedUser,
      };

      res.json({ status: true, content: addedUser });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return signIn;
};
