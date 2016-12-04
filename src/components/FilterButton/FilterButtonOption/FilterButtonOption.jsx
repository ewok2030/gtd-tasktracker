import React from 'react';

export default class FilterButtonOption extends React.Component {
    static propTypes = {
        label: React.PropTypes.string.isRequired
    }
    constructor() {
        super();
        this.state = {
            isSelected: true
        }
    }
    toggleSelected(event) {
        event.preventDefault();
        this.setState({isSelected: !this.state.isSelected});
    }

    renderIcon() {
        if (this.state.isSelected) {
            return (
                <span className="glyphicon glyphicon-ok"></span>
            );
        }
        else {
          return (<span className="glyphicon glyphicon-remove"></span>);
        }
    }

    render() {
        return (
            <li>
                <a href="#" tabIndex="-1" onClick={this.toggleSelected.bind(this)}>
                    {this.renderIcon()}&nbsp;{this.props.label}
                </a>
            </li>
        );
    }
};
