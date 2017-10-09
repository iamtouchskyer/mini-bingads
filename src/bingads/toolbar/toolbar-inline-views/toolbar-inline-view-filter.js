import React, {Component} from 'react';
import _ from 'lodash';
import Toolbar from '../../components/filter.js';

class ToolbarItemFilter extends Component {
    render() {
        return <Toolbar metaData={this.props.metaData} entry={this.props.entry} callBack={this.props.callBack}/>;
    }
};

export default ToolbarItemFilter;