import mongoose from "mongoose";
import { schemas } from "../../database/mongo";

const { User } = schemas;

export = {
  signUp: async (user: any) => {
    console.log("sign");
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },
};
