import React, {Component} from 'react';

class ToolbarItemDetails extends Component {
    render() {
        return (
            <span className="dropdown">
            <button className="btn btn-default" data-toggle="dropdown" role="button">Details<span className="caret"></span></button>
            <ul className="dropdown-menu" role="menu"> 
                <li className="dropdown-header">Auction Insights</li>
                <li><a href="javascript:void(0)" role="menuitem">Selected</a></li>
                <li><a href="javascript:void(0)" role="menuitem">All</a></li>
            </ul>
            </span>
        );

    }
}

export default ToolbarItemDetails;