import React from 'react';
import Header from './header.js';
import Wunderbar from './wunderbar.js';
import CampaignNavBar from './campaign-nav-bar.js';
import Toolbar from './toolbar/index.js';
import Grid from './grid/index.js';
import AlertGroup from './components/alert-group.js';
import DatePicker from './components/datepicker.js';

class BingAds extends React.Component {
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
                        <Toolbar />
                        <p/> <p/> <p/>
                        <Grid />

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