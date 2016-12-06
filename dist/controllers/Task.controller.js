"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTasks = getTasks;
exports.getTask = getTask;
exports.addTask = addTask;
exports.deleteTask = deleteTask;

var _Task = require("../models/Task.model");

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taskList = [{
    "id": 1,
    "title": "Take out the trash",
    "status": "New",
    "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
}, {
    "id": 2,
    "title": "Walk the dog",
    "status": "New",
    "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
}, {
    "id": 3,
    "title": "Pay the bills",
    "status": "New",
    "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
}, {
    "id": 4,
    "title": "Another task for work",
    "status": "Closed",
    "description": "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
}];

function getTasks(req, res) {
    res.json(taskList);
}

function getTask(req, res) {
    res.status(200).json(taskList.find(function (t) {
        return t.id === res.parmams.id;
    }));
}

function addTask(req, res) {
    res.send('Task Added!');
}

function deleteTask(req, res) {
    res.status(200).end();
}