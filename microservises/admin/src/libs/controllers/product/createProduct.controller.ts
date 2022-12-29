import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common/build";

export = (dependencies: any): any => {
  const {
    useCases: { createProduct_UseCase },
  } = dependencies;

  const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log(req.body);
      const addedProduct = await createProduct_UseCase(dependencies).execute(
        req.body
      );

      if (!addedProduct) {
        throw new BadRequestError("No such profile found");
      }

      res.json({ status: true, content: addedProduct });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProduct;
};
