import React, {Component} from 'react';
import _ from 'underscore';
import BootStrapDatePicker from 'bootstrap-datepicker';

class DatePicker extends Component {
    constructor() {
        super();

        this.generateDateMenu();
    }

    handleClick(e) {

    }


    generateDateMenu() {
        const today = new Date();

        this.metaData = [
           {title: 'Custom',        element: null},
           {title: 'Today',         element: today.toLocaleDateString()},
           {title: 'Yesterday',     element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'This week (Sun - Today)',     element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate());
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'This week (Mon - Today)',     element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate());
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'Last 7 days',                 element: (() => {
                        let last7Day = new Date(); last7Day.setDate(last7Day.getDate()-7);
                        return last7Day.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
           {title: 'last 14 days',                element: (() => {
                        let last14Day = new Date(); last14Day.setDate(last14Day.getDate()-14);
                        return last14Day.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
           {title: 'last 30 days',                element: (() => {
                        let last30Day = new Date(); last30Day.setDate(last30Day.getDate()-30);
                        return last30Day.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
        ];

        let f=false;
        this.dateMenu = _.map(this.metaData, (item) => {
            f = !f;
            return (
                <li role="menuitem">
                    <a href="javascript:void(0)" onClick={this.handleClick.bind(this)}> 
                        {f && (<span className="glyphicon glyphicon-ok"></span>)}
                        {!f && (<span className="glyphicon "></span>)}
                        {item.title}
                        <span className="pull-right">{item.element}</span>
                    </a> 
                </li>
            );
        });
    }

    render() {
        return (
            <div className="dropdown" style={{width:"400px"}}> 
                <button type="button" className="btn btn-default btn-block" data-toggle="dropdown">
                    <span className="pull-left">Click me</span>
                    <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                </button>
                <ul className="dropdown-menu" style={{width:"100%"}}>
                    {this.dateMenu}
                </ul>
            </div>
        );      
    }
}

export default DatePicker;