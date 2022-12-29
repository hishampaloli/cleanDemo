import mongoose from "mongoose";
import { schemas } from "../../database/mongo";

const { User } = schemas;

export = {
  createUser: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },

  getUserProfile: async (id: string) => {
    const mongooseObject = await User.findById(id);
    return mongooseObject;
  },

  updateUserProfile: async (id: string, data: any) => {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return user;
  },
};
