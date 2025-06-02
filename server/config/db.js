import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
