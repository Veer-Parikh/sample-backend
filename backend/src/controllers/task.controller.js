import prisma from "../config/prisma.js";
import redisClient from "../config/redis.js";

// Create Task
export const createTask = async (req, res, next) => {
  try {
    const task = await prisma.task.create({
      data: {
        ...req.body,
        userId: req.user.id,
      },
    });

    // Clear cache for this user
    await redisClient.del(`tasks:${req.user.id}`);

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// Get Tasks (with Redis caching)
export const getTasks = async (req, res, next) => {
  try {
    const cacheKey = `tasks:${req.user.id}`;

    const cache = await redisClient.get(cacheKey);
    if (cache) {
      return res.json(JSON.parse(cache));
    }

    const tasks = await prisma.task.findMany({
      where: { userId: req.user.id },
    });

    await redisClient.set(cacheKey, JSON.stringify(tasks), {
      EX: 60, // cache for 60 seconds
    });

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};