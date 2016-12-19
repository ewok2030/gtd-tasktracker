import React from 'react';

import TaskLane from './TaskLane/TaskLane';

export default class TaskBoard extends React.Component {
    static propTypes = {
        newTasks: React.PropTypes.array.isRequired,
        committedTasks: React.PropTypes.array.isRequired,
        activeTasks: React.PropTypes.array.isRequired,
        completedTasks: React.PropTypes.array.isRequired
    }

    constructor() {
        super();
        this.state = {
            draggedItem: null,
            draggedOver: null
        };
    }

    // The dragstart event is fired when the user starts dragging an element or text selection.
    dragStart(event) {
        // event = 	The element that will be dragged.
        // Must set this property here
        event.dataTransfer.effectAllowed = 'move';
        this.setState({
            draggedItem: Number(event.currentTarget.dataset.id)
        })
    }

    // The dragend event is fired when a drag operation is being ended
    dragEnd(event) {
        // event = The element that has been dragged.
        console.log('Update priority of # ' + this.state.draggedItem + ' to be less than # ' + this.state.draggedOver);
        this.setState({draggedItem: null, draggedOver: null});
    }

    // The dragover event is fired when an element or text selection is being dragged over a valid drop target
    dragOver(event) {
        // event = The element underneath the element being dragged.
        event.preventDefault();
        var over = event.currentTarget
        var to = Number(over.dataset.id);
        this.setState({
            draggedOver: Number(over.dataset.id)
        });
    }

    render() {
        return (
          <div>
            <div className="col-md-3">

              <TaskLane
                title="New Tasks"
                tasks={this.props.newTasks}/>

            </div>
            <div className="col-md-3">
              <TaskLane
                title="Open Tasks"
                tasks={this.props.committedTasks}/>

            </div>
            <div className="col-md-3">
              <TaskLane
                title="Active Tasks"
                tasks={this.props.activeTasks}/>

            </div>
            <div className="col-md-3">
              <TaskLane
                title="Completed Tasks"
                tasks={this.props.completedTasks}/>

            </div>
          </div>
        );
    }
}
