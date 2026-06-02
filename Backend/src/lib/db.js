// import mongoose from "mongoose";

// import { ENV } from "./env.js";

// export const connectDB = async () => {
//   try {
//     if (!ENV.DB_URL) {
//       throw new Error("DB_URL is not defined in environment variables");
//     }
//     const conn = await mongoose.connect(ENV.DB_URL);
//     console.log("✅ Connected to MongoDB:", conn.connection.host);
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB", error);
//     process.exit(1); // 0 means success, 1 means failure
//   }
// };



import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
  console.log('✅ In-memory MongoDB running');
};