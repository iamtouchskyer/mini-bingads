import React from 'react';
import _ from 'lodash';

class CampaignNavBar extends React.Component {
    constructor() {
        super();

        this.metaData = [
            {title:'Campaigns', link:"#CampaignTab", className:"active"},
            {title:'Ad Groups', link:"#AdGroupTab"},
            {title:'Settings', link:"#SettingsTab"},
            {title:'Ads', link:"#AdsTab"},
            {title:'Keywords', link:"#KeywordsTab"},
            {title:'Audiences', link:"#AudiencesTab"},
            {title:'Ad Extensions', link:"#AdExtensionsTab"},
            {title:'Change History', link:"#ChangeHistoryTab"},
            {title:'Dimensions', link:"#DimensionsTab"},
        ];

        this.tabs = _.map(this.metaData, (item) => {
            return (<li className={item.className ? item.className : ''}><a href={item.link} role='tab'>{item.title}</a></li>);
        });
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {this.tabs}
            </ul>
        );
    }
}

export default CampaignNavBar;