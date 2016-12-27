import React from 'react';
import { connect } from 'react-redux';
// Components
import TaskList from '../components/TaskList/TaskList';
import TaskEditor from '../components/TaskEditor/TaskEditor';
// Modules
import { getTask, updateTask, fetchTasks } from '../redux/modules/tasks';

// Map store state to component's properties
const mapStateToProps = state => ({
  tasks: state.tasks.data,
  activeTask: state.tasks.active,
});

// Map actions to component's properties
const mapDispatchToProps = dispatch => ({
  fetchTasks: () => {
    dispatch(fetchTasks());
  },
  getTask: (taskId) => {
    dispatch(getTask(taskId));
  },
  updateTask: (id, task) => {
    dispatch(updateTask(id, task));
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Tasks extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.array,
    activeTask: React.PropTypes.object,
    fetchTasks: React.PropTypes.func.isRequired,
    getTask: React.PropTypes.func.isRequired,
    updateTask: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewTitle: 'Tasks',
    };
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  handleSelectTask = taskId => this.props.getTask(taskId);

  handleOnSave = props => this.props.updateTask(this.props.activeTask._id, props)

  renderEditor() {
    if (this.props.activeTask == null) {
      return (
        <div className="well">
          <small>Select a task to edit</small>
        </div>
      );
    }
    const statusOptions = [
      {
        _id: '1',
        label: 'New',
      }, {
        _id: '2',
        label: 'Open',
      }, {
        _id: '3',
        label: 'Active',
      }, {
        _id: '4',
        label: 'Completed',
      },
    ];
    return (<TaskEditor statusList={statusOptions} initialValues={this.props.activeTask} onSave={this.handleOnSave} />);
  }

  render() {
    return (
      <div>
        <h2>{this.state.viewTitle}</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" />

            <div className="col-md-4">
              <TaskList
                tasks={this.props.tasks}
                onClick={this.handleSelectTask}
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
