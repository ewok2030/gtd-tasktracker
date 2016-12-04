import React from 'react';

import FilterButtonOption from './FilterButtonOption/FilterButtonOption.jsx';

export default class FilterButton extends React.Component {
    static propTypes = {
        options: React.PropTypes.array.isRequired
    }
    
    render() {
        return (
            <div class="button-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-filter"></span>&nbsp;Status
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    {this.props.options.map(o => <FilterButtonOption key={o.label} label={o.label} isSelected={true}/>)}
                </ul>
            </div>
        );
    }
};
