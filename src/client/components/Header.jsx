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
            <nav class="navbar navbar-inverse navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="navbar-brand" activeClassName="active" onlyActiveOnIndex={true}>Get Things Done!</IndexLink>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
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
