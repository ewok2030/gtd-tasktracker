import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
  }
  render() {
    const { location } = this.props;
    const tasksClass = location.pathname.match(/^\/tasks/) ? 'active' : '';

    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <IndexLink to="/" className="navbar-brand" activeClassName="active" onlyActiveOnIndex >Get Things Done!</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className={tasksClass}>
                <Link to="tasks">Tasks</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
