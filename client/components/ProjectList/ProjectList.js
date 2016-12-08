import React from 'react';

import ProjectListItem from './ProjectListItem/ProjectListItem';
import FilterButton from '../FilterButton/FilterButton';

export default class ProjectList extends React.Component {
    static propTypes = {
        projects: React.PropTypes.array.isRequired,
        onClick: React.PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><strong>Projects</strong></div>
                <div className="list-group">
                    {this.props.projects.map(p => <ProjectListItem key={p._id} id={p._id} name={p.name} onClick={this.props.onClick}/>)}
                </div>
            </div>
        );
    }
}
