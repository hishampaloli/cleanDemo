import { inMemory as inMemoryDb } from "../../database/inMemory";
import { v4 as uuidv4 } from "uuid";

export = {
  createUser: async (user: any) => {
    if (!user.id) {
      user.id = uuidv4();
    }
    inMemoryDb.users.push(user);
    console.log(inMemoryDb.users);

    return user;
  },

  getUserProfile: async (id: string) => {
    console.log(id + ">>>>>>>>>>>>");

    console.log(inMemoryDb.users);
    return inMemoryDb.users.find((item: any) => item.id === id);
  },

  updateUserProfile: async (id: string, data: any) => {
    const index = inMemoryDb.users.findIndex((item: any) => item.userId === id);

    if (index >= 0) {
      inMemoryDb.users[index] = data;
      return inMemoryDb.users[index];
    }
    return null;
  },
};
