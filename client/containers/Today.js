import React from 'react';
import { connect } from 'react-redux';
// Components
import TaskBoard from '../components/TaskBoard/TaskBoard';
// Actions
import { fetchTasks } from '../redux/modules/tasks';

// Map store state to component's properties
const mapStateToProps = state => ({
  tasks: state.tasks.data,
});

// Map actions to component's properties
const mapDispatchToProps = dispatch => ({
  fetchTasks: () => {
    dispatch(fetchTasks());
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Today extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.array.isRequired,
    fetchTasks: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewTitle: 'Today',
    };
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <h2>{this.state.viewTitle}</h2>
        <TaskBoard
          newTasks={this.props.tasks.filter(t => t.status === 'New')}
          committedTasks={this.props.tasks.filter(t => t.status === 'Open')}
          activeTasks={this.props.tasks.filter(t => t.status === 'Active')}
          completedTasks={this.props.tasks.filter(t => t.status === 'Completed')}
        />
      </div>
    );
  }
}
