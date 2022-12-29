import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URL! + "/shopIt-admin"
    );
    console.log(`Admin-db connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };
