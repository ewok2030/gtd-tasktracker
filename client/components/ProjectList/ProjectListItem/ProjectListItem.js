import React from 'react';

export default class ProjectListItem extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired
    }

    itemClicked(event) {
        event.preventDefault();
        this.props.onClick(this.props.id);
    }
    render() {
        return (
            <a href="#" className="list-group-item" onClick={this.itemClicked.bind(this)}>
                <span className="badge">#</span>
                {this.props.name}
            </a>
        );
    }
};
