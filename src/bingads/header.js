import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand" href="javascript:void(0)"> BingAds </a>
                </div>

                <div>
                    <ul className="nav navbar-nav">
                        <li><a href="javascript:void(0)" data-toggle="tab" data-target="#AccountsSummary">Accounts Summary</a></li>
                        <li><a href="javascript:void(0)" data-toggle="tab" data-target="#Home">Home</a></li>
                        <li><a href="javascript:void(0)" data-toggle="tab" data-target="#Campaigns">Campaigns</a></li>
                        <li><a href="javascript:void(0)" data-toggle="tab" data-target="#Reports">Reports</a></li>
                        <li><a href="javascript:void(0)" data-toggle="tab" data-target="#Opportunities">Opportunities</a></li>
                        <li className="dropdown">
                            <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">Tools&nbsp;<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="javascript:void(0)" data-toggle="tab" data-target="#AdPreview">Ad Preview Tool</a></li>                           
                                <li><a href="javascript:void(0)" data-toggle="tab" data-target="#KeywordPlanner">Keyword Planner</a></li>                           
                                <li className="divider"></li>
                                <li><a href="javascript:void(0)" data-toggle="tab" data-target="#BingMerchantCenter">Bing Merchant Center</a></li>                           
                                <li><a href="http://go.microsoft.com/fwlink/?LinkID=193932">Bing Ads Editor</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default Header;