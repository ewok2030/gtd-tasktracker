import {EventEmitter} from "events";

class TaskStore extends EventEmitter {
    constructor() {
        super()
        this.tasks = [
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
    }

    createTask(title, desc) {
        const id = Date.now();
        this.tasks.push({id, title, status: New});
        this.emit("change");
    }

    getAll() {
        return this.tasks;
    }
}

const taskStore = new TaskStore;

export default taskStore;
