const express = require("express")

const taskController = require("../controllers/task-controller")

const router = express.Router()

router
    .route("/tasks")
    .get(taskController.getAllTask)
    .post(taskController.createTask)
router
    .route("/tasks/:taskId")
    .get(taskController.getTaskById)
    .delete(taskController.deleteTask)
    .patch(taskController.updateTask)

module.exports = router
