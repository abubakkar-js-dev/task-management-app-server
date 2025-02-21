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
    },
    position: {
        type:Number,
        require: true,
        default: 0,
    }
},{timestamps: true})


const Task = mongoose.model('Task',taskSchema);

module.exports = Task;