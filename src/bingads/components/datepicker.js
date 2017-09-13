import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'underscore';
import BootStrapDatePicker from 'bootstrap-datepicker';

class DatePicker extends Component {
    constructor() {
        super();

        this.state = {
            checkedIndex: -1,
        };

        this.generateDateMenu();
    }

    handleClick(e) {
        /*
        if (e && e.target && e.target.id) {
            const index = parseInt(e.target.id.replace(DatePicker.menuIdPrefix(), ""), 10);

            if (index >= 0 && index < _.size(this.metaData)) {
                this.setState({checkedIndex:index});
            }

            if (index === 0) {
                ;
            } else {
                $(this).parent().toggleClass('close');
            }
        }
        */
    }

    static menuIdPrefix() {
        return "DatePicker-Item-";
    }

    generateCustomizedDatePicker() {
        this.metaData[0].element = (
            <span className="form-inline" id="CustomizedDatePicker">
                <span className="form-group-sm">
                    <span className="input-daterange input-group">
                        <input type="text" className="input-sm form-control" name="start" />
                        <span className="input-group-addon">to</span>
                        <input type="text" className="input-sm form-control" name="end" />
                    </span>
                </span>
            </span>
        );

    }

    generateDateMenu() {
        const today = new Date();

        this.metaData = [
           {title: 'Custom',        element: null},
           {title: 'Today',         element: today.toLocaleDateString()},
           {title: 'Yesterday',     element: (() => {
                        let yesterday = new Date(); 
                        yesterday.setDate(yesterday.getDate()-1);
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'This week (Sun - Today)',     element: (() => {
                        let lastSunday = new Date(); 
                        lastSunday.setDate(lastSunday.getDate()-lastSunday.getDay());
                        return lastSunday.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
           {title: 'This week (Mon - Today)',     element: (() => {
                        let lastMonday = new Date();
                        if (today.getDay() === 0) { // Today is Sunday
                            lastMonday.setDate(lastMonday.getDate()-lastMonday.getDay() - 6);
                        } else {
                            lastMonday.setDate(lastMonday.getDate()-lastMonday.getDay() + 1);
                        }
                        return lastMonday.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
           {title: 'Last 7 days',                 element: (() => {
                        let last7Day = new Date(); last7Day.setDate(last7Day.getDate()-7);
                        return last7Day.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
           {title: 'Last week (Sun - Today)',     element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate());
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'Last week (Mon - Today)',     element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate());
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'This month',                  element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate());
                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'Last month',                  element: (() => {
                        let yesterday = new Date(); yesterday.setDate(yesterday.getDate());
                        return yesterday.toLocaleDateString();
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
    }

    componentDidMount() {
        $('.dropdown.datepicker-dropdown button').on('click', function (event) {
            $(this).parent().toggleClass('open');
        });

        $('.dropdown.datepicker-dropdown > ul.dropdown-menu > li > a').on('click', function (e) {
            const index = parseInt(e.target.id.replace(DatePicker.menuIdPrefix(), ""), 10);

            if (index >= 0 && index < _.size(this.metaData)) {
                this.setState({checkedIndex:index});
            }

            if (index > 0) {
                $('.dropdown.datepicker-dropdown').removeClass('open');
            } else {
            }
        }.bind(this));

        $('body').on('click', function (e) {
            if (!$('.dropdown.datepicker-dropdown').is(e.target) 
                && $('.dropdown.datepicker-dropdown').has(e.target).length === 0 
                && $('.open').has(e.target).length === 0
            ) {
                $('.dropdown.datepicker-dropdown').removeClass('open');
            }
        });

        $('#CustomizedDatePicker .input-daterange').datepicker({
            clearBtn: true,
            keyboardNavigation: true,
            forceParse: true,
            todayHighlight: true
        });
    }

    render() {
        let index = 0;
        this.generateCustomizedDatePicker();
        this.dateMenu = _.map(this.metaData, (item) => {
            const additionalClass = this.state.checkedIndex === index ? "glyphicon-ok" : "";

            return (
                <li role="menuitem">
                    <a href="javascript:void(0)" id={DatePicker.menuIdPrefix() + index++} onClick={this.handleClick.bind(this)}> 
                        <span className={"glyphicon " + additionalClass}></span>
                        {item.title}
                        {index === 1 && <span className="pull-right" style={{width:'50%'}}>{item.element}</span>}
                        {index >1 && <span className="pull-right">{item.element}</span>}
                    </a> 
                </li>
            );
        });

        return (
            <div className="dropdown datepicker-dropdown" style={{width:"500px"}}> 
                <button type="button" className="btn btn-default btn-sm btn-block">
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