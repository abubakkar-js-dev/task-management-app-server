const express = require("express");
const {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
} = require("../controllers/task/task.controllers");
const router = express.Router();

router.post("/", addTask);
router.put("/", updateTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/update-task-position");

module.exports = router;
