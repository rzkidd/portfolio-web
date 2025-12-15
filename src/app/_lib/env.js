import dotenv from "dotenv";

dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL || "";
export const DATABASE_NAME = process.env.DATABASE_NAME || "";
export const APP_URL = process.env.APP_URL || "";
