import React from 'react';

export default class TaskEditor extends React.Component {
    titleChanged(event) {
        const title = event.target.value;
        console.log("Title changed to: " + title)
        this.props.task.title = title;
        console.log("Title cached as: " + this.props.task.title)
    }
    taskUpdate(event) {
        this.props.taskChanged(this.props.task);
    }
    render() {
        return (
            <div class="task-summary">
                <h1>Task Editor</h1>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" value={this.props.task.title} onChange={this.titleChanged.bind(this)}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.taskUpdate.bind(this)}>Save</button>
            </div>
        )
    }
}
