import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../libs/entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { signUp_UseCase, getUser_UseCase },
  } = dependencies;

  const currentUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json(req.currentUser);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return currentUser;
};
