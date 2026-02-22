import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL,
});
// console.log(process.env.REDIS_URL)

redis.on("error", (err) => console.log("❌ Redis Error:", err));
redis.on("connect", () => console.log("🔗 Redis connecting..."));
redis.on("ready", () => console.log("✅ Redis connected"));

await redis.connect();

export default redis;