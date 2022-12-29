import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common/build";
import { ProductDeletedPublisher } from "../../../events/publisher.ts/product-deleted-event";
import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: any): any => {
  const {
    useCases: { deleteProduct_UseCase },
  } = dependencies;

  const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { productId } = req.params;

      const product = await deleteProduct_UseCase(dependencies).execute({
        productId,
      });

      if (!product) {
        throw new BadRequestError("No such Product found");
      }

      await new ProductDeletedPublisher(natsWrapper.client).publish({
        id: product.id,
      });

      res.json({ status: true, content: product, message: "deleted" });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
};
