import React, {Component} from 'react';
import _ from 'lodash';
import Header from './header.js';
import Wunderbar from './wunderbar.js';
import CampaignNavBar from './campaign-nav-bar.js';
import Toolbar from './toolbar/toolbar.js';
import Grid from './grid/grid.js';
import AlertGroup from './components/alert-group.js';
import DatePicker from './components/datepicker.js';

import TripMetadata from './metadata/trip.js';
import NorthWindMetadata from './metadata/northwind.js';

class BingAds extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            entry: null
        });

        this.tripMetadata = TripMetadata();
        this.northWindMetadata = NorthWindMetadata();

        this.generateEntries(this.tripMetadata);
    }
    
    componentWillMount() {
        this.setState({
            entry: _.keys(this.entries)[0]
        });
    }

    entryDidChange(entryKey, entryItem, event) {
        this.setState({
            entry: entryKey
        });
    }

    generateEntries(metaData) {
        this.entries = _.pickBy(metaData.type, (typeItem) => {
            return typeItem.type && typeItem.type.includes(".EntitySet");
        });

        this.entryView = _.map(this.entries, (typeItem, typeKey) => {
                            return (
                                <label className="radio-inline">
                                    <input type="radio" name="options" value={typeKey} onClick={_.bind(this.entryDidChange, this, typeKey, typeItem)}/> {typeKey}
                                </label>
                           );
                        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                
                <div style={{width: '100%'}}> 
                    <div className="navigation-pane" style={{float:'left', width: '220px'}}>
                        <Wunderbar />
                    </div> 
                    <div style={{float:'right', width: '85%'}}> 
                        <AlertGroup />    
                        <div>
                            <span className="h3">All Campaigns</span>
                            <span className="pull-right"> <DatePicker /></span>
                        </div>
                        <p/> <p/> <p/>
                        <CampaignNavBar />
                        <p/> <p/> <p/>

                        {this.entryView}

                        <Toolbar metaData={this.tripMetadata} entry={this.state.entry}/>
                        <p/> <p/> <p/>
                        <Grid metaData={this.tripMetadata} entries={this.entries} entry={this.state.entry}/>

                        <h6 className="small">
                        Not all metrics are in real time. Clicks and impressions in the last 2 hours and conversions in the last 5 hours might not be included. Learn more
    Only clicks are MRC accredited. The time zone for the date range is (GMT-08:00) Pacific Time (U.S. & Canada); Tijuana. Learn more
                        </h6>
                    </div> 
                </div>
                <div style={{clear:'both'}}></div>
            </div>
        );
    }
};

export default BingAds;