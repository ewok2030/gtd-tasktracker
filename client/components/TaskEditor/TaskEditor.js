import React from 'react';

export default class TaskEditor extends React.Component {
    static propTypes = {
        task: React.PropTypes.object
    }

    render() {

        if (this.props.task == null) {
            return (
                <div className="well">
                    <small>Select a task to edit</small>
                </div>
            );
        } else {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>Task Editor</strong>
                    </div>
                    <div className="panel-body">
                        <div class="form-group">
                            <label for="dateCreated">Date Created</label>
                            <input type="text" class="form-control" id="dateCreated" value={this.props.task.dateCreated} readOnly/>
                        </div>
                        <div class="form-group">
                            <label for="id">Task Id</label>
                            <input type="text" class="form-control" id="id" value={this.props.task._id} readOnly/>
                        </div>
                    </div>
                    <div className="panel-footer">
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
                </div>
            );
        }
    }
}
