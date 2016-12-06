import { Router } from 'express';
import * as TaskController from '../controllers/Task.controller';
const router = new Router();

// Get all Tasks
router.route('/tasks').get(TaskController.getTasks);

// Get one Task by cuid
router.route('/tasks/:id').get(TaskController.getTask);

// Add a new Task
router.route('/tasks').post(TaskController.addTask);

// Delete a Task by cuid
router.route('/tasks/:id').delete(TaskController.deleteTask);

export default router;
