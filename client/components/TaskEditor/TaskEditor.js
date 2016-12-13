import React from 'react';

import TaskStatusPicker from '../TaskStatusPicker/TaskStatusPicker';

export default class TaskEditor extends React.Component {
    static propTypes = {
        task: React.PropTypes.object.isRequired,
        updateTask: React.PropTypes.func.isRequired
    }

    updateProperty(event) {
        var newProp = new Object();
        newProp[event.target.id] = event.target.value;
        this.props.updateTask(this.props.task._id, newProp);
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
                    <div class="form-group">
                        <label for="status">Status</label>
                        <select className="form-control" id="status" value={this.props.task.status} onChange={this.updateProperty.bind(this)}>
                            {statusOptions.map(o => <option key={o._id} value={o.label}>{o.label}</option>)}
                        </select>
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

                </div>
                <div className="panel-footer"></div>
            </div>
        );
    }

}
