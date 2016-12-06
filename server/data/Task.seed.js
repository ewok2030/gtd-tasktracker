import Task from '../models/Task.model';

export default function() {
    Task.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        console.log("Seeding Tasks...")
        const taskA3 = new Task({title: 'Test the solution', status: 'New', dateCreated: new Date()});
        const taskA1 = new Task({title: 'Design the solution', status: 'In Progress', dateCreated: new Date()});
        const taskA2 = new Task({title: 'Build the solution', status: 'New', dateCreated: new Date()});

        const taskB1 = new Task({title: 'Talk to customers', status: 'In Progress', dateCreated: new Date()});
        const taskB2 = new Task({title: 'Record their feedback', status: 'New', dateCreated: new Date()});

        Task.create([
            taskA1, taskA2, taskA3, taskB1, taskB2
        ], (error) => {
            if (!error) {
                // console.log('ready to go....');
            }
        });
    });
}
