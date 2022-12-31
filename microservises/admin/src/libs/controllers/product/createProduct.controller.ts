import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common/build";
import { ProductCreatedPublisher } from "../../../events/publisher.ts/product-created-event";
import { natsWrapper } from "../../../nats-wrapper";

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
      const { title, description, stock, price, image } = req.body;

      if (!title) throw new BadRequestError("Please provide a title");
      if (!description)
        throw new BadRequestError("Please provide a description ");
      if (!stock) throw new BadRequestError("Please provide a valid stock");
      if (!price) throw new BadRequestError("Please provide a valid price");
      if (!image) throw new BadRequestError("Please provide a image link");

      const addedProduct = await createProduct_UseCase(dependencies).execute(
        req.body
      );

      if (!addedProduct) {
        throw new BadRequestError("Something went wrong");
      }

      await new ProductCreatedPublisher(natsWrapper.client).publish({
        description: addedProduct.description,
        title: addedProduct.title,
        stock: Number(addedProduct.stock),
        price: Number(addedProduct.price),
        image: addedProduct.image,
        id: addedProduct.id,
      });

      res.json(addedProduct);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProduct;
};
