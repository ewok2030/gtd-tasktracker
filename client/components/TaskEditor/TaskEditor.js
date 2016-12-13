import React from 'react';

export default class TaskEditor extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        editTask: React.PropTypes.func.isRequired,
        saveTask: React.PropTypes.func.isRequired,
        isTaskEdited: React.PropTypes.bool.isRequired
    }

    handleSaveTask() {
        this.props.saveTask(this.props.task._id, this.props.task);
    }

    updateProperty(event) {
        var newProp = new Object();
        newProp[event.target.id] = event.target.value;
        this.props.editTask(this.props.task._id, newProp);
    }

    renderButton() {
        if (this.props.isTaskEdited) {
            return (
                <button className="btn btn-primary" onClick={this.handleSaveTask.bind(this)}>Save</button>
            );
        } else {
            return (
                <button className="btn btn-primary" disabled>Save</button>
            );
        }
    }
    render() {
        const statusOptions = [
            {
                _id: "1",
                label: "New"
            }, {
                _id: "2",
                label: "Open"
            }, {
                _id: "3",
                label: "Closed"
            }
        ];

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <strong>Task Editor</strong>
                    <span className="pull-right text-muted">
                        <small>{this.props.task._id}</small>
                    </span>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                            <dl>
                                <dt>Status</dt>
                                <dd>
                                    <select className="form-control" id="status" value={this.props.task.status} onChange={this.updateProperty.bind(this)}>
                                        {statusOptions.map(o => <option key={o._id} value={o.label}>{o.label}</option>)}
                                    </select>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <dl>
                                <dt>Date Created</dt>
                                <dd>{this.props.task.dateCreated}</dd>
                                <dt>Last Updated</dt>
                                <dd>{this.props.task.lastUpdated}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" value={this.props.task.title} onChange={this.updateProperty.bind(this)}/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" class="form-control" id="description" value={(this.props.task.description == null)
                            ? ""
                            : this.props.task.description} onChange={this.updateProperty.bind(this)}/>
                    </div>
                    {this.renderButton()}
                </div>
                <div className="panel-footer"></div>
            </div>
        );
    }
}
