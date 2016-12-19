import React from 'react';

export default class FilterButtonOption extends React.Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
  }
  constructor() {
    super();
    this.state = {
      isSelected: true,
    };
  }
  toggleSelected(event) {
    event.preventDefault();
    this.setState({ isSelected: !this.state.isSelected });
  }

  renderIcon() {
    if (this.state.isSelected) {
      return (
        <span className="glyphicon glyphicon-ok" />
      );
    }
    return (<span className="glyphicon glyphicon-remove" />);
  }

  render() {
    return (
      <li>
        <button tabIndex="-1" onClick={this.toggleSelected.bind(this)}>
          {this.renderIcon()}&nbsp;{this.props.label}
        </button>
      </li>
    );
  }
}
