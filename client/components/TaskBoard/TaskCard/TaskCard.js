import React from 'react';
import { Link } from 'react-router';

export default class TaskCard extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    status: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array,
    due: React.PropTypes.number,
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><Link to={`tasks/${this.props.id}`}>{this.props.title}</Link></div>
        <ul className="list-group">
          <li className="list-group-item">
            {this.props.description}
          </li>
          <li className="list-group-item">
            Due:&nbsp;<span className="label label-default">{this.props.due}</span>
            <span className="label label-default pull-right">{this.props.status}</span>
          </li>
          <li className="list-group-item">{this.props.tags.map((t, i) => <span key={i} className="label label-primary">{t}</span>)}</li>
        </ul>
      </div>
    );
  }
}
