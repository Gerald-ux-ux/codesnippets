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
  console.log("Connecting to the database...");
  if (cached.conn) {
    console.log("Using cached database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, {
        dbName: "clerk-next-14-db",
        bufferCommands: false,
        connectTimeoutMS: 30000,
      })
      .then((mongooseInstance) => {
        console.log("Database connection established");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("Database connection error:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
