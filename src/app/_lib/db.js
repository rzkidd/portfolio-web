import mongoose from "mongoose";
import { DATABASE_URL, DATABASE_NAME } from "./env.js";

const connect = async () => {
  try {
    const conn = await mongoose.connect(DATABASE_URL, {
      dbName: DATABASE_NAME,
    });

    return Promise.resolve("Database connected!");
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connect;
