import React from 'react';

// Components
import TaskList from "../components/TaskList/TaskList";
import TaskEditor from "../components/TaskEditor/TaskEditor";
// Stores
import TaskStore from "../stores/TaskStore";

export default class Tasks extends React.Component {
    constructor() {
        super();
        const tasks = TaskStore.getAll();
        this.state = {
            tasks: tasks,
            selectedTask: tasks[0]
        };
    }

    taskSelected(taskId) {
        const tasks = this.state.tasks;
        this.setState({
            tasks: tasks,
            selectedTask: tasks.find(t => t.id == taskId)
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <h2>Tasks</h2>
                    </div>
                    <div className="col-md-4">
                        <TaskList tasks={this.state.tasks} activeTask={this.state.selectedTask} onSelect={this.taskSelected.bind(this)} />
                    </div>
                    <div className="col-md-6">
                        <TaskEditor task={this.state.selectedTask}/>
                    </div>
                </div>
            </div>
        );
    }
}
