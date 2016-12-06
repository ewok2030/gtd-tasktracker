import Task from '../models/Task';

const taskList = [
    {
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
    }
];

/**
 * Get all tasks
 * @param req
 * @param res
 * @returns void
 */
export function getTasks(req, res) {
    res.json(taskList);
}

/**
 * Save a task
 * @param req
 * @param res
 * @returns void
 */
export function addTask(req, res) {
    res.send('Task Added!');
}

/**
 * Get a single task
 * @param req
 * @param res
 * @returns void
 */
export function getTask(req, res) {
    res.json(taskList.find(t => t.id === res.parmams.id));
}

/**
 * Delete a task
 * @param req
 * @param res
 * @returns void
 */
export function deleteTask(req, res) {
    res.status(200).end();
}
