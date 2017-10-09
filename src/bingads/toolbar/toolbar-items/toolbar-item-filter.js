import React, {Component} from 'react';

class ToolbarItemFilter extends Component {
    render() {
        return (
            <span className="dropdown">
                <button className="btn btn-default" data-toggle="dropdown">
                    <span className="glyphicon glyphicon-filter"></span>
                    Filter
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu"> 
                    <li><a href="javascript:void(0)"  onClick={() => {this.props.callback('CreateFilter')}}>Create Filter</a></li>
                </ul>
            </span>
        );
    }
}

export default ToolbarItemFilter;