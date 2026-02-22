import express from "express";
import auth from "../middleware/auth.middleware.js";
import allowRole from "../middleware/role.middleware.js";

import {
  getAllUsers,
  deleteUserByAdmin,
  getAllTasksAdmin,
  getMyProfile,
  updateMyProfile,
} from "../controllers/admin.controller.js";

const router = express.Router();

// ==============================
// 👤 USER ROUTES
// ==============================

router.get("/me", auth, getMyProfile);
router.put("/me", auth, updateMyProfile);

// ==============================
// 👑 ADMIN ROUTES
// ==============================

router.get("/users", auth, allowRole("admin"), getAllUsers);
router.delete("/users/:id", auth, allowRole("admin"), deleteUserByAdmin);
router.get("/tasks", auth, allowRole("admin"), getAllTasksAdmin);

export default router;