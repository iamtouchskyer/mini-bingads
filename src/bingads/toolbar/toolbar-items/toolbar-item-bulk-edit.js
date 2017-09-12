import React, {Component} from 'react';

class ToolbarItemBulkEdit extends Component {
    render() {
        return (
            <span className="dropdown">
                <button className="btn btn-default" data-toggle="dropdown" >Edit<span className="caret"></span>
                </button>
                <ul className="dropdown-menu"> 
                    <li><a href="javascript:void(0)" onClick={() => {this.props.callback('BulkEditEnable')}}><span className="glyphicon glyphicon-play"></span>&nbsp;Enable</a></li>
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-pause"></span>&nbsp;Pause</a></li>
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-stop"></span>&nbsp;Delete</a></li>
                    <li className="divider"></li>
                    <li><a href="javascript:void(0)"  onClick={() => {this.props.callback('BulkEditChangeBudget')}}>Change budgets</a></li>
                    <li><a href="javascript:void(0)">Other changes</a></li>
                </ul>
            </span>
        );
    }
}

export default ToolbarItemBulkEdit;