const express = require('express');
const router = express.Router();
const todoController = require('../controller/TodoController');
const authController = require('../middleware/checkAuth');

router.get("/todo", authController.verifyToken, todoController.getTask);
router.post("/add/task", authController.verifyToken, todoController.createTask);
router.post("/update", todoController.updateTask);
router.post("/delete", todoController.deleteTask);

module.exports = router;
