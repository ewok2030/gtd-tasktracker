import React from 'react';
import { connect } from 'react-redux';
// Components
import TaskEditor from '../components/TaskEditor/TaskEditor';
// Actions
import { selectTask } from '../actions/selectTask.action';
import { updateTask } from '../actions/updateTask.action';
import { editTask } from '../actions/editTask.action';

// Map store state to component's properties
const mapStateToProps = (state, ownProps) => {
  return { activeTask: state.activeTask.data, isActiveTaskEdited: state.activeTask.isEditing };
};

// Map actions to component's properties
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectTask: (taskId) => {
      dispatch(selectTask(taskId));
    },
    editTask: (id, prop) => {
      dispatch(editTask(id, prop));
    },
    updateTask: (id, task) => {
      dispatch(updateTask(id, task));
    },
  }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TaskDetails extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      viewTitle: 'Task Editor',
    };
  }

  componentWillMount() {
    const { params } = this.props;
    const { taskId } = params;
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
    return (<TaskEditor task={this.props.activeTask} editTask={this.props.editTask} saveTask={this.props.updateTask} isTaskEdited={this.props.isActiveTaskEdited}/>);
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
