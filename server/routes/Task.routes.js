'use strict';

let express = require('express');
let router = express.Router();
let controller = require('../controllers/Task.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/tasks', controller.add);
router.delete('/:id', controller.delete);

module.exports = router;
