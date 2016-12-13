import React from 'react';

import FilterButtonOption from './FilterButtonOption/FilterButtonOption';

export default class FilterButton extends React.Component {
    static propTypes = {
        options: React.PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="button-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span className="glyphicon glyphicon-filter"></span>&nbsp;Status
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    {this.props.options.map(o => <FilterButtonOption key={o.label} label={o.label} isSelected={true}/>)}
                </ul>
            </div>
        );
    }
};
