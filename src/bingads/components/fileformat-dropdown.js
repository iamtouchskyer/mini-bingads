import React, {Component} from 'react';
import Dropdown from './dropdown.js';

class FileFormatDropdown extends Component {
    constructor() {
        super();

        this.metaData = [
            {name: '.csv'},
            {name: '.tsv'},
            {name: '.xlsx'},
            {name: '.zip (.csv)'},
        ];
    }

    render() {
        return (
            <Dropdown list={this.metaData} fixedTitle={this.props.fixedTitle} title={this.props.title} itemPerPage={100}/>
        );
    }
}

export default FileFormatDropdown;