import React from 'react';
import {connect} from 'react-redux';
// Components
import TaskBoard from '../components/TaskBoard/TaskBoard';
// Actions
import {fetchTasks} from '../actions/fetchTasks.action';

// Map store state to component's properties
const mapStateToProps = (state, ownProps) => {
    return {
        newTasks: state.fetchTasks.data.filter(t => t.status === "New"),
        committedTasks: state.fetchTasks.data.filter(t => t.status === "Open"),
        activeTasks: state.fetchTasks.data.filter(t => t.status === "Active"),
        completedTasks: state.fetchTasks.data.filter(t => t.status === "Completed")
    };
};

// Map actions to component's properties
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTasks: () => {
            dispatch(fetchTasks());
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewTitle: "Today"
        };
    }

    componentWillMount() {
        this.props.fetchTasks();
    }

    render() {
        return (
            <div>
                <h2>{this.state.viewTitle}</h2>
                <TaskBoard newTasks={this.props.newTasks} committedTasks={this.props.committedTasks} activeTasks={this.props.committedTasks} completedTasks={this.props.committedTasks} />
            </div>
        );
    }
}
