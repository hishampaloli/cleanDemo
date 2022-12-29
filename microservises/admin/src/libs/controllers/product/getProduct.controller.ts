import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common/build";

export = (dependencies: any): any => {
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

      res.json({ status: true, content: product });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
};
