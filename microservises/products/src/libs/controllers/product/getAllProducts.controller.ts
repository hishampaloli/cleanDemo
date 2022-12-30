import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@hpshops/common/build";

export = (dependencies: any): any => {
  const {
    useCases: { getAllProduct_UseCase },
  } = dependencies;

  const getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("sfdsd*&*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7f");
      const product = await getAllProduct_UseCase(dependencies).execute();

      if (!product) {
        throw new BadRequestError("No such Product found");
      }

      res.json({ status: true, content: product });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllProducts;
};
