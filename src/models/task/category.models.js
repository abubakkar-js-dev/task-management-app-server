const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tasks: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Task",
            }
        ]
    }
},{timestamps: true})


const Category = mongoose.model('Category',categorySchema);

module.exports = Category;