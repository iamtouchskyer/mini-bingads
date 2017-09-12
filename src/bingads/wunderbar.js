import React from 'react';
import WunderbarPanel from './wunderbar-panel.js';

class Wunderbar extends React.Component {
    render () {
        return (
            <div>
                <div className="form-group dropdown">
                    <label className="control-label">Selected Account</label> 
                    <button className="btn btn-default btn-block" type="button" data-toggle="dropdown">touchskyer00 - B0105ULF<span className="glyphicon glyphicon-chevron-down pull-right"></span></button>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#" role="menuitem">touchskyer00 - B0105ULF</a></li>
                        <li><a href="#" role="menuitem">touchskyer01 - B010E7GZ</a></li>
                    </ul>
                </div>

                <hr />

                <div className="form-group">
                    <div className="input-group input-group-sm">
                        <input type="text" placeholder="Search" className="form-control" />
                        <div className="input-group-addon"><span className="glyphicon glyphicon-search"></span></div>
                    </div>
                </div>

                <WunderbarPanel />
            </div>
        );
    }

}

export default Wunderbar;