import mongoose from "mongoose";
import { schemas } from "../../db/mongo";

const { Product } = schemas;

export = {
  createProduct: async (product: any) => {
    const mongooseObject = Product.build(product);
    return await mongooseObject.save();
  },

  getProduct: async (productId: string) => {
    const mongooseObject = await Product.findById(productId);
    return mongooseObject;
  },

  getAllProduct: async () => {
    const mongooseObject = await Product.find();
    return mongooseObject;
  },

  deleteProduct: async (productId: string) => {
    console.log(productId + "??????");

    const mongooseObject = await Product.findByIdAndDelete(productId);
    return mongooseObject;
  },

  updateProduct: async (productId: string, data: any) => {
    const mongooseObject = await Product.findByIdAndUpdate(productId, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return mongooseObject;
  },
};
