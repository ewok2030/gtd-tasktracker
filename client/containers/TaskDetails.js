import React from 'react';
import { connect } from 'react-redux';
// Components
import TaskEditor from '../components/TaskEditor/TaskEditor';
// Module
import { getTask, updateTask } from '../redux/modules/tasks';

// Map store state to component's properties
const mapStateToProps = state => ({
  task: state.tasks.active,
});

// Map actions to component's properties
const mapDispatchToProps = dispatch => ({
  getTask: (taskId) => {
    dispatch(getTask(taskId));
  },
  updateTask: (id, task) => {
    dispatch(updateTask(id, task));
  },
});


@connect(mapStateToProps, mapDispatchToProps)
export default class TaskDetails extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    getTask: React.PropTypes.func.isRequired,
    updateTask: React.PropTypes.func.isRequired,
    task: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewTitle: 'Task Editor',
    };
  }

  componentWillMount() {
    const { params } = this.props;
    const { taskId } = params;
    this.props.getTask(taskId);
  }

  handleOnSave = props => this.props.updateTask(this.props.task._id, props)

  renderEditor() {
    if (this.props.task == null) {
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
    return (<TaskEditor statusList={statusOptions} initialValues={this.props.task} onSave={this.handleOnSave} />);
  }

  render() {
    return (
      <div>
        <h2>{this.state.viewTitle}</h2>
        <div className="container-fluid">
          {this.renderEditor()}
        </div>
      </div>
    );
  }
}
