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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,

    }
},{timestamps: true})


const Task = mongoose.model('Task',taskSchema);

module.exports = Task;