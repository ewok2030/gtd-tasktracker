import React from 'react';

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import TaskList from "../components/TaskList.jsx";
import TaskEditor from "../components/TaskEditor.jsx";

export default class Layout extends React.Component {
    constructor() {
        super();
        const tasks = [
            {
                id: 1,
                title: "Take out the trash"
            }, {
                id: 2,
                title: "Walk the dog"
            }, {
                id: 3,
                title: "Pay the bills"
            }
        ];
        this.state = {
            tasks: tasks,
            selectedTask: tasks[0]
        };
    }

    getTaskIndex(task) {
        return this.state.tasks.findIndex(t => t.id == task.id);
    }
    
    selectTask(task) {
        const index = this.getTaskIndex(task);
        const tasks = this.state.tasks;
        this.setState({tasks: tasks, selectedTask: tasks[index]});
    }

    render() {
        return (
            <div>
                <Header title={this.props.title}/>
                <div className="col-md-4">
                    <h1>Project</h1>
                </div>
                <div className="col-md-8">
                    <TaskList tasks={this.state.tasks} selectTask={this.selectTask.bind(this)}/>
                    <TaskEditor task={this.state.selectedTask}/>
                </div>
                <Footer/>
            </div>
        );
    }
};
