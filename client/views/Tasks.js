import React from 'react';
import {connect} from "react-redux";
// Components
import TaskList from "../components/TaskList/TaskList";
import TaskEditor from "../components/TaskEditor/TaskEditor";
import ProjectList from "../components/ProjectList/ProjectList";
// Actions
import {fetchTasks} from "../actions/fetchTasks.action";
import {selectTask} from "../actions/selectTask.action";
import {fetchProjects} from "../actions/fetchProjects.action";
import {selectProject} from "../actions/selectProject.action";
import {updateTask} from "../actions/updateTask.action";

// Map store state to component's properties
const mapStateToProps = (state, ownProps) => {
    return {tasks: state.fetchTasks.data, activeTask: state.activeTask.data, projects: state.fetchProjects.data};
};

// Map actions to component's properties
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTasks: () => {
            dispatch(fetchTasks());
        },
        selectTask: (taskId) => {
            dispatch(selectTask(taskId));
        },
        fetchProjects: () => {
            dispatch(fetchProjects());
        },
        selectProject: (projectId) => {
            dispatch(selectProject(projectId));
        },
        updateTask: (id, task) => {
            dispatch(updateTask(id, task));
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewTitle: "Tasks"
        };

    }

    componentWillMount() {
        this.props.fetchTasks();
        this.props.fetchProjects();
    }

    render() {
        const editor = (this.props.activeTask == null)
            ? <div className="well">
                    <small>Select a task to edit</small>
                </div>
            : <TaskEditor task={this.props.activeTask} updateTask={this.props.updateTask}/>;
        return (
            <div>
                <h2>{this.state.viewTitle}</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <ProjectList projects={this.props.projects} onClick={this.props.selectProject}/>
                        </div>
                        <div className="col-md-4">
                            <TaskList tasks={this.props.tasks} onClick={this.props.selectTask} activeTask={this.props.activeTask}/>
                        </div>
                        <div className="col-md-6">
                            {editor}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
