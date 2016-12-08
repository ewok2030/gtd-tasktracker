import React from 'react';
import {connect} from "react-redux";
// Components
import TaskList from "../components/TaskList/TaskList";
import TaskEditor from "../components/TaskEditor/TaskEditor";
import ProjectList from "../components/ProjectList/ProjectList";
// Actions
import {fetchTasks} from "../actions/fetchTasks.action.js";
import {selectTask} from "../actions/selectTask.action.js";
import {fetchProjects} from "../actions/fetchProjects.action.js";
import {selectProject} from "../actions/selectProject.action.js";

// Map store state to component's properties
const mapStateToProps = (state, ownProps) => {
    return {tasks: state.fetchTasks.data, activeTaskId: state.activeTask.data.id, projects: state.fetchProjects.data};
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
        const currentActiveTask = (this.props.activeTaskId == null)
            ? null
            : this.props.tasks.find(t => t._id === this.props.activeTaskId);
        return (
            <div>
                <h2>{this.state.viewTitle}</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <ProjectList projects={this.props.projects} onClick={this.props.selectProject}/>
                        </div>
                        <div className="col-md-4">
                            <TaskList tasks={this.props.tasks} onClick={this.props.selectTask} activeTaskId={this.props.activeTaskId}/>
                        </div>
                        <div className="col-md-6">
                            <TaskEditor task={currentActiveTask}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
