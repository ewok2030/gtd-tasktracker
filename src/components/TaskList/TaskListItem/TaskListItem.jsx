import React from 'react';

export default class TaskListItem extends React.Component {
    static propTypes = {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        onSelect: React.PropTypes.func.isRequired,
        description: React.PropTypes.string
    }
    renderIcon() {
        switch (this.props.status) {
            case "Closed":
                return (
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                );
            case "Completed":
                return (
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                );
            default:
                return (
                    <span className="glyphicon glyphicon-asterisk" aria-hidden="true"></span>
                );
        }
    }
    itemClicked() {
        this.props.onSelect(this.props.id);
    }
    render() {
        return (
            <a href="#" className="list-group-item" onClick={this.itemClicked.bind(this)}>
                <h4 class="list-group-item-heading">
                    {this.renderIcon()}&nbsp;{this.props.title}</h4>
                <p class="list-group-item-text">{this.props.status}</p>
                <p class="list-group-item-text">{this.props.description}</p>
            </a>
        );
    }
};
