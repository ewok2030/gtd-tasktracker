'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _Task = require('../controllers/Task.controller');

var taskController = _interopRequireWildcard(_Task);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get All
router.route('/').get(taskController.getTasks);

// Get
router.route('/:id').get(taskController.getTask);

// Create
router.route('/tasks').post(taskController.addTask);

// Delete
router.route('/:id').delete(taskController.deleteTask);

exports.default = router;