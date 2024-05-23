import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URL!;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value is preserved across module reloads caused by HMR (Hot Module Replacement)
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, its best not to use a global variable

  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// const MONGODB_URL = process.env.MONGO_URL!;

// interface MongooseConnection {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = {
//     conn: null,
//     promise: null,
//   };
// }

// export async function databaseConnection() {
//   if (cached.conn) return cached.conn;

//   if (!MONGODB_URL) {
//     throw new Error("MONGODB_URL is not defined");
//   }

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URL, {
//       dbName: "clerk-next-14-db",
//       bufferCommands: false,
//       connectTimeoutMS: 30000,
//     });
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
