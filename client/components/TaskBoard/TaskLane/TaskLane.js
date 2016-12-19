import React from 'react';

import TaskCard from '../TaskCard/TaskCard';

export default class TaskLane extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        tasks: React.PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <strong>{this.props.title}</strong>&nbsp;<span class="badge pull-right">{this.props.tasks.length}</span>
                </div>
                <div className="panel-body">
                    {this.props.tasks.map(t => <TaskCard key={t._id} id={t._id} title={t.title} status={t.status} isBlocked={false} tags={t.tags}/>)}
                </div>
            </div>
        );
    }
}
