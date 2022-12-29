import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    useCases: { signUp_UseCase, getUser_UseCase },
  } = dependencies;

  const currentUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json({ status: true, content: req.currentUser });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return currentUser;
};
