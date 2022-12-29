import mongoose from "mongoose";
import { schemas } from "../../database/mongo";

const { User } = schemas;

export = {
  signUp: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },

  getUser: async (user: any) => {
    const userList = await User.find({ email: user.email });
    return userList;
  },
};
