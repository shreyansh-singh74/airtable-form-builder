import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("Mongodb Uri is missing.");
    }

    await mongoose.connect(uri);
    console.log("Mongodb is connected");
  } catch (err) {
    console.log("Mongo error: ", err);
  }
};
