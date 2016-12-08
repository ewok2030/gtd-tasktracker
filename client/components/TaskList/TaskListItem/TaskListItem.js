import React from 'react';

export default class TaskListItem extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired,
        description: React.PropTypes.string,
        isSelected: React.PropTypes.bool
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
    itemClicked(event) {
        event.preventDefault();
        this.props.onClick(this.props.id);
    }
    render() {
        const isActive = ((this.props.isSelected != null) && (this.props.isSelected == true))
            ? "active"
            : "";
        return (
            <a href="#" className={"list-group-item " + isActive} onClick={this.itemClicked.bind(this)}>
                <h4 class="list-group-item-heading">
                    {this.renderIcon()}&nbsp;{this.props.title}</h4>
                <p class="list-group-item-text">{this.props.status}</p>
                <p class="list-group-item-text">{this.props.description}</p>
            </a>
        );
    }
};
