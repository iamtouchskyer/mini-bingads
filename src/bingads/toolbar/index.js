import React, {Component} from 'react';

import ToolbarItemBulkEdit from './toolbar-items/toolbar-item-bulk-edit.js';
import ToolbarItemDetails from './toolbar-items/toolbar-item-details.js';
import ToolbarItemAutomate from './toolbar-items/toolbar-item-automate.js';
import ToolbarItemInlineDownload from './toolbar-items/toolbar-item-inline-download.js';
import ToolbarInlineViewChangeBudget from './toolbar-inline-views/toolbar-inline-view-change-budget.js';
import ToolbarInlineViewInlineDownload from './toolbar-inline-views/toolbar-inline-view-inline-download.js';
import SegmentDropdown from '../components/segment-dropdown.js';

class BingAdsToolbar extends Component {
    constructor() {
        super();

        this.toolbarElement = (
            <div className="btn-toolbar btn-toolbar-group" role="toolbar">
                <div className="btn-group btn-group-primary" role="group">
                    <button className="btn btn-primary">Create Campaign</button>
                    <ToolbarItemBulkEdit callback={this.handleToolbarItemClick.bind(this)}/>
                    <ToolbarItemDetails callback={this.handleToolbarItemClick.bind(this)}/>
                    <ToolbarItemAutomate callback={this.handleToolbarItemClick.bind(this)}/>
                    <ToolbarItemInlineDownload callback={this.handleToolbarItemClick.bind(this)}/>
                </div>
                
                <div className="btn-group btn-group-secondary">
                    <SegmentDropdown fixedTitle="true" title="Segment"/>
                </div>
            </div>
        );

        this.state = ({renderringElement: this.toolbarElement});
    }

    handleInlineViewClick(theElementKey) {
        switch (theElementKey) {
            case 'ChangeBudgetSave':
            case 'ChangeBudgetCancel':
            case 'InlineDownloadDownload':
            case 'InlineDownloadCancel':
                this.setState({renderringElement:this.toolbarElement});
                break;
            
            default:
                break;
        }
    }

    handleToolbarItemClick(theElementKey) {
        switch (theElementKey) {
            case 'BulkEditEnable':
            case 'BulkEditPause':
            case 'BulkEditDelete':
                break;

            case 'BulkEditChangeBudget':
                this.setState({renderringElement:<ToolbarInlineViewChangeBudget callBack={this.handleInlineViewClick.bind(this)}/>});
                break;

            case 'InlineDownload':
                this.setState({renderringElement:<ToolbarInlineViewInlineDownload callBack={this.handleInlineViewClick.bind(this)}/>});
                break;

            default:
                break;
        }
    }

    render() {
        return this.state.renderringElement;
    }
}

export default BingAdsToolbar;