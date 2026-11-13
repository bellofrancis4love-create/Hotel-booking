import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';

dotenv.config();

const app = express();

app.use(cors());

// Webhook FIRST, raw body
app.post("/api/clerk", express.raw({ type: "*/*" }), clerkWebhooks);

// Everything else after
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => {
  res.send('API is working');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();