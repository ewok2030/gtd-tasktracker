import React from 'react';
import {IndexLink, Link} from "react-router";

export default class Header extends React.Component {
    static propTypes = {
        location: React.PropTypes.object.isRequired
    }
    render() {
        const {location} = this.props;
        const tasksClass = location.pathname.match(/^\/tasks/)
            ? "active"
            : "";
        const projectsClass = location.pathname.match(/^\/projects/)
            ? "active"
            : "";
        const settingsClass = location.pathname.match(/^\/settings/)
            ? "active"
            : "";

        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="navbar-brand" activeClassName="active" onlyActiveOnIndex={true}>Get Things Done!</IndexLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li class={tasksClass}>
                                <Link to="tasks">Tasks</Link>
                            </li>
                            <li class={projectsClass}>
                                <Link to="projects">Projects</Link>
                            </li>
                            <li class={settingsClass}>
                                <Link to="settings">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
