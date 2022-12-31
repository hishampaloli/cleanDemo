import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common/build";
import { ProductUpdatedPublisher } from "../../../events/publisher.ts/product-updated-event";
import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: any): any => {
  const {
    useCases: { updateProduct_UseCase },
  } = dependencies;

  const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { productId } = req.params;

      const product = await updateProduct_UseCase(dependencies).execute(
        productId,
        req.body
      );

      if (!product) {
        throw new BadRequestError("No such Product found");
      }

      await new ProductUpdatedPublisher(natsWrapper.client).publish({
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
        id: product.id,
      });

      res.json(product);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProduct;
};
