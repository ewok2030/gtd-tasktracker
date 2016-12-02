import React from 'react';

export default class TaskCard extends React.Component {
    taskSelected(event) {
        event.preventDefault();
        this.props.selectTask(this.props.task);
    }
    render() {
        return (
            <a href="#" className="list-group-item" onClick={this.taskSelected.bind(this)}>
                <strong>
                    <span className="glyphicon glyphicon-asterisk"></span>
                </strong>
                {this.props.task.title}
            </a>
        );
    }
};
