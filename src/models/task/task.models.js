const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    description: {
        type: String,
        required: false,
        default: "",
        maxlength: 200,
    },
    category: {
        type: String,
        enum: ["To-Do","In Progress", "Done"],
        default: "To-Do"

    },
    userId: {
        type: String,
        require: true,
        unique: true
    }
},{timestamps: true})


const Task = mongoose.model('Task',taskSchema);

module.exports = Task;