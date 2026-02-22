import express from "express";
import auth from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {
  createTask,
  getTasks,
} from "../controllers/task.controller.js";

import { createTaskSchema } from "../validations/task.validations.js";

const router = express.Router();

router.post("/", auth, validate(createTaskSchema), createTask);
router.get("/", auth, getTasks);

export default router;