import mongoose from "mongoose";

// Reuse the connection across invocations (serverless-friendly)
const cached = global._mongoose || (global._mongoose = { conn: null, promise: null });

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: "hotel-booking",
        bufferCommands: false,
      })
      .then((m) => {
        console.log("Database connected successfully");
        return m;
      })
      .catch((err) => {
        cached.promise = null; // allow retry on next request
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;