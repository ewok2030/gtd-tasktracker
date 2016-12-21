import { Router } from 'express';
import * as projectController from '../controllers/Project.controller';

const router = new Router();

// Get All
router.route('/').get(projectController.getProjects);

// Get
router.route('/:id').get(projectController.getProject);

// Create
router.route('/').post(projectController.addProject);

// Delete
router.route('/:id').delete(projectController.deleteProject);

export default router;
