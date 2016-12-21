import React from 'react';

export default class Projects extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
  }
  render() {
    const { params } = this.props;
    const { project } = params;

    const projectList = [
      'Some Article',
      'Some Other Article',
      'Yet Another Article',
      'Still More',
      'Fake Article',
      'Partial Article',
      'American Article',
      'Mexican Article',
    ].map((title, i) => <li key={i}>{title}</li>);

    return (
      <div>
        <h1>Projects</h1>
        Selected Project: {project}
        <ul>
          {projectList}
        </ul>
      </div>
    );
  }
}
