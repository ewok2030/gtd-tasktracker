import React from 'react';

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import TaskList from "../components/TaskList/TaskList.jsx";
import TaskEditor from "../components/TaskEditor/TaskEditor.jsx";

import tasks from "../data/tasks.json";
import taskStatusList from "../data/task.status.json";

export default class Tasks extends React.Component {
    constructor() {
        super();
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
            <div>
                <Header title={this.props.title}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <h1>Project</h1>
                        </div>
                        <div className="col-md-4">
                            <TaskList tasks={this.state.tasks} activeTask={this.state.selectedTask} onSelect={this.taskSelected.bind(this)} statusList={taskStatusList}/>
                        </div>
                        <div className="col-md-6">
                            <TaskEditor task={this.state.selectedTask}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
