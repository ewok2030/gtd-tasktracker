import React from 'react';

import TaskCard from './TaskCard.jsx'

export default class TaskList extends React.Component {
    render() {
        var taskCards = this.props.tasks.map(t => <TaskCard key={t.id} task={t} selectTask={this.props.selectTask}/>);
        return (
            <div class="list-group">
                {taskCards}
            </div>
        );
    }
};
