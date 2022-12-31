import e, { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../libs/entities/interfaces";
export = (dependencies: DepenteniciesData): any => {
  const signOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.session = null;
      res.json({ status: true, content: "Successfully Logged out" });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return signOut;
}