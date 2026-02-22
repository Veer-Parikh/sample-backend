import prisma from "../config/prisma.js";

// ==============================
// 👑 ADMIN ONLY CONTROLLERS
// ==============================

// get all users (admin only)
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    res.json(users);
  } catch (err) {
    next(err);
  }
};

// delete any user (admin only)
export const deleteUserByAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id },
    });

    res.json({ message: "User deleted by admin" });
  } catch (err) {
    next(err);
  }
};

// get all tasks in system (admin only)
export const getAllTasksAdmin = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: {
          select: { email: true, name: true },
        },
      },
    });

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// ==============================
// 👤 USER ACCESSIBLE CONTROLLERS
// ==============================

// user profile
export const getMyProfile = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// update own profile
export const updateMyProfile = async (req, res, next) => {
  try {
    const { name } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { name },
    });

    res.json({ message: "Profile updated", user });
  } catch (err) {
    next(err);
  }
};