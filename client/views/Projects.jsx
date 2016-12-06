import React from "react";

export default class Projects extends React.Component {
    render() {
        const {query} = this.props.location;
        const {params} = this.props;
        const {project} = params;
        const {date, filter} = query;

        const projectList = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Fake Article",
            "Partial Article",
            "American Article",
            "Mexican Article"
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
