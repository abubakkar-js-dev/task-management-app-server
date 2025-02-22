const express = require("express");
const {
  getTasks,
  addTask,
  updateTask,
  getTaskById,
  deleteTaskById,
  updateTaskPositions,
} = require("../controllers/task/task.controllers");
const router = express.Router();

router.post("/", addTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id",deleteTaskById);
router.post("/update-positions",updateTaskPositions);

module.exports = router;
