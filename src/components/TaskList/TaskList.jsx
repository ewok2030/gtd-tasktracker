import React from 'react';

import TaskListItem from './TaskListItem/TaskListItem.jsx';
import FilterButton from '../FilterButton/FilterButton.jsx';

export default class TaskList extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired,
        activeTask: React.PropTypes.object.isRequired,
        onSelect: React.PropTypes.func.isRequired,
        statusList: React.PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
                <div className="row">

                </div>
                <div className="list-group">
                    {this.props.tasks.map(t => <TaskListItem key={t.id} id={t.id} title={t.title} status={t.status} description={t.description} onSelect={this.props.onSelect}/>)}
                </div>
            </div>
        );
    }
}
