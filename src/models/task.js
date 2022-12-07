const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide name"],
        maxlength: [100, "Name can not be more than 100 characters"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task
