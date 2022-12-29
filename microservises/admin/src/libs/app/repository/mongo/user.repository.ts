import mongoose from "mongoose";

import { schemas } from "../../database/mongo";

const { User } = schemas;

export = {
  createUser: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },

  getUserProfiles: async () => {
    const mongooseObject = await User.find({});
    return mongooseObject;
  },

  updateUserProfile: async (id: string, data: any) => {
    const userData = await User.findById(id);
    
    const user = await User.findByIdAndUpdate(id, {isBlocked: !userData?.isBlocked}, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return user;
  },
};
