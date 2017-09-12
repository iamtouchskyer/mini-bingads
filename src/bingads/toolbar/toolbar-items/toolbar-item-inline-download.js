import React, {Component} from 'react';

class ToolbarItemInlineDownload extends Component {
    render() {
        return (
            <button className="btn btn-default" onClick={()=>{this.props.callback('InlineDownload')}}><span className="glyphicon glyphicon glyphicon-download-alt"></span>Download
                <span className="badge">New!</span>
            </button>
        );
    }
}

export default ToolbarItemInlineDownload;