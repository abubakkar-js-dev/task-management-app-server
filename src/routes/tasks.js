const express = require("express");
const {
  getTasks,
  addTask,
  updateTask,
  getTaskById,
  deleteTaskById,
  updateTaskPositoins,
} = require("../controllers/task/task.controllers");
const router = express.Router();

router.post("/", addTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id",deleteTaskById);
router.put("/update-task-position",updateTaskPositoins);

module.exports = router;
