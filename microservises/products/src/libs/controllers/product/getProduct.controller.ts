import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@hpshops/common/build";
import { DepenteniciesData } from "../../entities/interface";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getProduct_UseCase },
  } = dependencies;

  const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { productId } = req.params;

      const product = await getProduct_UseCase(dependencies).execute({
        productId,
      });

      if (!product) {
        throw new BadRequestError("No such Product found");
      }

      res.json(product);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
};
