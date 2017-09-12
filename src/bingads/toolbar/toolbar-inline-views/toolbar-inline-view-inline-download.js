import React, {Component} from 'react';
import FileFormatDropdown from '../../components/fileformat-dropdown.js';
import SegmentDropdown from '../../components/segment-dropdown.js';

class ToolbarItemBulkEdit extends Component {

    render() {
        return (
            <div id="ToolbarInlineViewInlineDownload">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">
                        Download report
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2 col-xs-2">
                                    <label className="form-text">Format</label>
                                </div>
                                <div className="col-sm-10 col-xs-10">
                                    <FileFormatDropdown />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-2 col-xs-2">
                                    <label className="form-text">Segment</label>
                                </div>
                                <div className="col-sm-10 col-xs-10">
                                    <SegmentDropdown />
                                </div>
                            </div>

                            <div className="row">
                                <div className="btn-toolbar">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary" onClick={()=>{this.props.callBack('InlineDownloadDownload')}}>Download</button>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default" onClick={()=>{this.props.callBack('InlineDownloadCancel')}}>Cancel</button>
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