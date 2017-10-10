import React, {Component} from 'react';
import Dropdown from './dropdown.js';

class SegmentDropdown extends Component {
    constructor() {
        super();
    
        this.metaData = [
            {id: 'none', name: 'None'},
            {id: 'time', name: 'Time', children: [
                    {id: 'day', name: 'Day'},
                    {id: 'week', name: 'Week'},
                    {id: 'month', name: 'Month'},
                    {id: 'quarter', name: 'Quarter'},
                    {id: 'year', name: 'Year'},
                    {id: 'dow', name: 'Day of the week'},
                ]},
            {id: 'devicetype', name: 'Device Type'},
            {id: 'network', name: 'Network'},
            {id: 'tvso', name: 'Top vs. other'},
        ];
    }

    render() {
        return (
            <Dropdown list={this.metaData} fixedTitle={this.props.fixedTitle} title={this.props.title} itemPerPage={100}/>
        );
    }
}

export default SegmentDropdown;