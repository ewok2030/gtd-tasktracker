import React from 'react';
import { connect } from 'react-redux';
// Components
import TaskList from '../components/TaskList/TaskList';
import TaskEditor from '../components/TaskEditor/TaskEditor';
import ProjectList from '../components/ProjectList/ProjectList';
// Actions
import { fetchTasks } from '../actions/fetchTasks.action';
import { selectTask } from '../actions/selectTask.action';
import { fetchProjects } from '../actions/fetchProjects.action';
import { selectProject } from '../actions/selectProject.action';
import { updateTask } from '../actions/updateTask.action';
import { editTask } from '../actions/editTask.action';

// Map store state to component's properties
const mapStateToProps = state => ({
  tasks: state.fetchTasks.data,
  activeTask: state.activeTask.data,
  isActiveTaskEdited: state.activeTask.isEditing,
  projects: state.fetchProjects.data,
});

// Map actions to component's properties
const mapDispatchToProps = dispatch => ({
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
  editTask: (id, prop) => {
    dispatch(editTask(id, prop));
  },
  updateTask: (id, task) => {
    dispatch(updateTask(id, task));
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Tasks extends React.Component {
  static propTypes = {
    fetchTasks: React.PropTypes.func.isRequired,
    tasks: React.PropTypes.array.isRequired,
    fetchProjects: React.PropTypes.func.isRequired,
    projects: React.PropTypes.array.isRequired,
    selectTask: React.PropTypes.func.isRequired,
    selectProject: React.PropTypes.func.isRequired,
    editTask: React.PropTypes.func.isRequired,
    updateTask: React.PropTypes.func.isRequired,
    activeTask: React.PropTypes.object.isRequired,
    isActiveTaskEdited: React.PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewTitle: 'Tasks',
    };
  }

  componentWillMount() {
    this.props.fetchTasks();
    this.props.fetchProjects();
  }

  handleSelectTask(taskId) {
    if (this.props.isActiveTaskEdited) {
      /* eslint-disable no-alert */
      const ok = confirm('There are unsaved changes. Clicking OK will discard changes.');
      /* eslint-enable no-alert */
      if (!ok) {
        return;
      }
    }
    this.props.selectTask(taskId);
  }

  renderEditor() {
    if (this.props.activeTask == null) {
      return (
        <div className="well">
          <small>Select a task to edit</small>
        </div>
      );
    }
    return (
      <TaskEditor
        task={this.props.activeTask}
        editTask={this.props.editTask}
        saveTask={this.props.updateTask}
        isTaskEdited={this.props.isActiveTaskEdited}
      />
    );
  }

  render() {
    return (
      <div>
        <h2>{this.state.viewTitle}</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <ProjectList projects={this.props.projects} onClick={this.props.selectProject} />
            </div>
            <div className="col-md-4">
              <TaskList
                tasks={this.props.tasks}
                onClick={this.handleSelectTask.bind(this)}
                activeTask={this.props.activeTask}
              />
            </div>
            <div className="col-md-6">
              {this.renderEditor()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
