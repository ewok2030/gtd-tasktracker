import React from 'react';

export default class TaskStatusPickerOption extends React.Component {
    static propTypes = {
        taskId: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired
    }

    onClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.taskId, {status: this.props.label});
    }

    render() {
        return (
            <li>
                <a href="#" tabIndex="-1" onClick={this.onClick.bind(this)}>{this.props.label}</a>
            </li>
        );
    }
}
