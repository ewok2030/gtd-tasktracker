import React from 'react';

import TaskListItem from './TaskListItem/TaskListItem';

export default class TaskList extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired,
    activeTask: React.PropTypes.object,
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <strong>Tasks</strong>
        </div>
        <div className="list-group">
          {this.props.tasks.map(t =>
            <TaskListItem
              key={t._id}
              id={t._id}
              title={t.title}
              status={t.status}
              description={t.description}
              onClick={this.props.onClick}
              isSelected={(this.props.activeTask != null) && (t._id === this.props.activeTask._id)}
            />,
          )}
        </div>
      </div>
    );
  }
}
