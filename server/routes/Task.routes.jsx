import {Router} from 'express';
import * as taskController from '../controllers/Task.controller.jsx';
const router = new Router();

// Get All
router.route('/').get(taskController.getTasks);

// Get
router.route('/:id').get(taskController.getTask);

// Create
router.route('/tasks').post(taskController.addTask);

// Delete
router.route('/:id').delete(taskController.deleteTask);

export default router;
