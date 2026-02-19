import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
 
  var mongooseCache: MongooseCache | undefined;
}

const cache =
  global.mongooseCache || (global.mongooseCache = {conn: null, promise: null});

export async function connectDB() {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI as string, {
      serverSelectionTimeoutMS: 10000,
    });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
