import e, { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import generateToken from "../../../utils/jsonwebtoken";
import { CommonResponse } from "../../../utils/Response";

export = (dependencies: any): any => {
  const signOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.session = null;
      res.json({ status: true, content: "Successfully Logged out" });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return signOut;
};
