const Task = require("../../models/task/task.models");

const addTask = async (req, res) => {
  try {
    const { title, description, category, userId } = req.body;
    const lastTask = await Task.findOne({ category, userId }).sort({
      position: -1,
    });
    const newTask = new Task({
      title,
      description,
      category,
      userId,
      position: lastTask ? lastTask.position + 1 : 0,
    });
    await newTask.save();
    res.status(201).send(newTask);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const { userId } = req.query;
    const tasks = await Task.find({ userId: userId }).sort({ position: 1 });
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = req.body;
    const taskId = req.params.id;

    if (!taskId) {
      res.status(400).send({ error: "Task ID is required" });
    }

    const updateTask = await Task.findByIdAndUpdate(
      taskId,
      {
        ...task,
      },
      { new: true }
    );

    if (!updateTask) {
      res.status(404).send({ error: "Task not found" });
    }

    res.status(200).send(updateTask);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(taskId);
    if (!taskId){
      res.status(400).send({ error: "Task ID is required" });
    }
    await Task.findByIdAndDelete(taskId);
    res.status(200).send({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const updateTaskPositions = async (req, res) => {
  try {
      const { tasks } = req.body;

      // Use Promise.all to await all update operations
      const updatePromises = tasks.map((task) =>
          Task.findByIdAndUpdate(
              task._id,
              { position: task.position },
              { new: true } // Return the updated document (optional)
          )
      );

      // Await all updates
      await Promise.all(updatePromises);

      res.status(200).send({ message: "Task positions updated successfully" });
  } catch (err) {
      console.error("Error updating task positions:", err);
      res.status(500).send({ message: err.message });
  }
};

module.exports = {
  addTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTaskById,
  updateTaskPositions,
};
