import React from 'react';

export default class TaskEditor extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="well">
                <h1>Task Editor</h1>
                <div class="form-group">
                    <label for="id">Task Id</label>
                    <input type="text" class="form-control" id="id" value={this.props.task.id} readOnly/>
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" value={this.props.task.title} readOnly/>
                </div>
                <div class="form-group">
                    <label for="status">Status</label>
                    <input type="text" class="form-control" id="status" value={this.props.task.status} readOnly/>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" value={this.props.task.description} readOnly/>
                </div>
            </div>
        )
    }
}
