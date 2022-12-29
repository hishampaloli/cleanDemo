import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import generateToken from "../../../utils/jsonwebtoken";
import { CommonResponse } from "../../../utils/Response";

export = (dependencies: any): any => {
  const {
    useCases: { signUp_UseCase, getUser_UseCase },
  } = dependencies;

  const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

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

      res.json({ status: true, content: addedUser });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return signUp;
};
