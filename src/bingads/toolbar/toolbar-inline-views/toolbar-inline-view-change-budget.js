import React, {Component} from 'react';

class ToolbarItemBulkEdit extends Component {

    render() {
        return (
            <div id="ToolbarItemInlineViewChangeBudget">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">
                        Change budgets (x campaigns selected)
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="container">
                        <div className="row">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label className="form-text">Action</label>
                                    <select className="form-control">
                                        <option>Set</option>
                                        <option>Increase</option>
                                        <option>Descrease</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-text"> Daily Budget </label>
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="0"/>
                                        <span className="input-group-addon">USD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                                &nbsp;
                        </div>

                        <div className="row">
                            <div className="btn-toolbar">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.props.callBack('ChangeBudgetSave')}}>Save</button>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default">Preview</button>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default" onClick={()=>{this.props.callBack('ChangeBudgetCancel')}}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolbarItemBulkEdit;