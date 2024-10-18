import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
export const redis = new Redis({
  host: "127.0.0.1", // Change if using a remote server
  port: 6379, // Change if using a different port
  maxRetriesPerRequest: 10, // Increase retries
});
