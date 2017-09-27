import React from 'react';

class DebugMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            customCss : 'current-theme.css'
        };
    }

    switchTheme(event) {
        switch (event.target.id) {
            case 'DebugMenuBootStrapTheme':
                this.setState({customCss:'bootstrap-theme.css'});
                break;

            case 'DebugMenuCurrentTheme':
                this.setState({customCss:'current-theme.css'});
                break;

            case 'DebugMenuNewTheme':
                this.setState({customCss:'new-theme.css'});
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div className="navbar-brand dropdown" id="DebugMenu">
                {this.state.customCss && <link rel="stylesheet" type="text/css" href={this.state.customCss} />}
                <span className="cursor-pointer" data-toggle="dropdown"> BingAds </span>
                <ul className="dropdown-menu">
                    <li><a href="javascript:void(0)" id="DebugMenuBootStrapTheme" onClick={this.switchTheme.bind(this)}>BootStrap Theme</a></li>
                    <li><a href="javascript:void(0)" id="DebugMenuCurrentTheme" onClick={this.switchTheme.bind(this)}>Current Theme</a></li>
                    <li><a href="javascript:void(0)" id="DebugMenuNewTheme" onClick={this.switchTheme.bind(this)}>New Theme</a></li>
                </ul>
            </div>
        );
    }
};

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <DebugMenu />
                </div>

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
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">Import Campaigns&nbsp;<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="javascript:void(0)" data-toggle="tab" data-target="#AdPreview">Import from Google Adwords</a></li>                           
                            <li><a href="javascript:void(0)" data-toggle="tab" data-target="#KeywordPlanner">Import from file</a></li>                           
                            <li className="divider"></li>
                            <li><a href="javascript:void(0)" data-toggle="tab" data-target="#BingMerchantCenter">Import schedule and history</a></li>                           
                        </ul>
                    </li>
                </ul>


                <ul className="nav navbar-nav navbar-right">
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-info-sign"></span></a></li>
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-question-sign"></span></a></li>
                    <li><a href="javascript:void(0)"><span className="glyphicon glyphicon-comment"></span></a></li>

                    <li className="dropdown">
                        <a href="javascript:void(0)" data-toggle="dropdown">xingjingx@hotmail.com&nbsp;
                            <span className="glyphicon glyphicon-cog"></span>
                        </a>
                        <ul className="dropdown-menu" style={{width: '300px'}}>
                            <li><a href="javascript:void(0)">Accounts & Billing</a></li>
                            <li><a href="javascript:void(0)">My Settings</a></li>
                            <li><a href="javascript:void(0)">Sign Out</a></li>
                            <li className="divider"></li>
                            <li className="fake-a">Call us at 
                                    <p /><b>1-800-518-5689</b>
                                    <p />Mon - Fri: 6 A.M. - 6 P.M. (Pacific Time)
                                    <p />Sat : 8 A.M. - 6 P.M.(Pacific Time) 
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        );
    }
};

export default Header;