const Task = require("../models/task")
const wrapController = require("../middleware/wrap-controllers")

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({})
        return res.json({ tasks })
    } catch {
        return res.status(500).json({ msg: err })
    }
}

const getTaskById = async (req, res) => {
    try {
        const { taskId } = req.params
        const task = await Task.findOne({ _id: taskId })

        if (!task) {
            return res.status(404).json({ msg: "No task with id " + taskId })
        }

        return res.json({ task })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

const createTask = async (req, res) => {
    const newTask = await Task.create(req.body)
    return res.status(201).json({ newTask })
}

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })

        if (!task) {
            return res.status(404).json({ msg: "No task with id " + taskId })
        }

        return res.json({ task })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            return res.status(404).json({ msg: "No task with id " + taskId })
        }

        return res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({ error })
    }
}

const taskController = wrapController({
    createTask,
    getAllTask,
    getTaskById,
    deleteTask,
    updateTask,
})

module.exports = taskController
