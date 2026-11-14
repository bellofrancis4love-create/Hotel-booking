import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

dotenv.config();

const app = express();

app.use(cors());

// Make sure the database is connected before any route runs
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(500).json({ success: false, message: "Database unavailable" });
  }
});

// Webhook FIRST, with the raw body
app.post("/api/clerk", express.raw({ type: "*/*" }), clerkWebhooks);

// Everything else after
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working");
});

// Only listen when running locally; Vercel uses the exported app
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;