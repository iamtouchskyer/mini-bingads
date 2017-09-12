import React, {Component} from 'react';

class ToolbarItemAutomate extends Component {
    render() {
        return (
            <span className="dropdown">
            <button className="btn btn-default" data-toggle="dropdown">Automate<span className="caret"></span></button>
            <ul className="dropdown-menu" role="menu"> 
                <li className="dropdown-header">Create rule for Campaigns</li>
                <li><a href="javascript:void(0);" role="menuitem">Change budget when...</a></li>
                <li><a href="javascript:void(0);" role="menuitem">Change current bids when...</a></li>
                <li><a href="javascript:void(0);" role="menuitem">Pause ad groups when ...</a></li>
                <li><a href="javascript:void(0);" role="menuitem">Change current bids when ...</a></li>
                <li><a href="javascript:void(0);" role="menuitem">Increase to estimated top of page bid when ...</a></li>
            </ul>
            </span>
        );
    }
}

export default ToolbarItemAutomate;