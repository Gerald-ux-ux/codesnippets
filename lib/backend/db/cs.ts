import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGO_URL!;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function databaseConnection() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "clerk-next-14-db",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
  cached.conn = await cached.promise;
  return cached.conn;
}
