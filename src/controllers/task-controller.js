const Task = require("../models/task")
const wrapController = require("../middleware/wrap-controllers")

const getAllTask = async (req, res) => {
    const tasks = await Task.find({})
    return res.json({ tasks })
}

const getTaskById = async (req, res) => {
    const { taskId } = req.params
    const task = await Task.findOne({ _id: taskId })

    if (!task) {
        return res.status(404).json({ msg: "No task with id " + taskId })
    }

    return res.json({ task })
}

const createTask = async (req, res) => {
    const newTask = await Task.create(req.body)
    return res.status(201).json({ newTask })
}

const deleteTask = async (req, res) => {
    const { taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId })

    if (!task) {
        return res.status(404).json({ msg: "No task with id " + taskId })
    }

    return res.json({ task })
}

const updateTask = async (req, res) => {
    const { taskId } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!task) {
        return res.status(404).json({ msg: "No task with id " + taskId })
    }

    return res.status(200).json({ task })
}

const taskController = wrapController({
    createTask,
    getAllTask,
    getTaskById,
    deleteTask,
    updateTask,
})

module.exports = taskController
