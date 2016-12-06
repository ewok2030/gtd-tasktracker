import Task from '../models/Task.model';

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

export function getTasks(req, res) {
    res.json(taskList);
}

export function getTask(req, res) {
    res.status(200).json(taskList.find(t => t.id === res.parmams.id));
}

export function addTask(req, res) {
    res.send('Task Added!');
}

export function deleteTask(req, res) {
    res.status(200).end();
}
