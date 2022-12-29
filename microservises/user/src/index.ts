import mongoose from "mongoose";
import { app } from "./app";
import { connectDB } from "./config/db";
import { intPort } from "./config/port";
import { UserBlockListener } from "./events/listerners/user-block-listener";
import { UserCreatedListener } from "./events/listerners/user-registered-listener";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be defined");
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await natsWrapper.connect(
      "ticketing",
      process.env.NATS_CLIENT_ID,
      "http://nats-srv:4222"
    );

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new UserCreatedListener(natsWrapper.client).listen();
    new UserBlockListener(natsWrapper.client).listen();

    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 30000!!!!!!!!");
  });
};

start();
