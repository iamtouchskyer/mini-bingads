import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import SwitchButton from 'react-switch-button';
import 'react-switch-button/dist/react-switch-button.css';
import BootStrapDatePicker from 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';
import './datepicker-override.css';
import './switchbutton-override.css';

class DatePicker extends Component {
    constructor() {
        super();

        this.state = {
            checkedIndex: this.props && this.props.index ? this.props.index : 1,
            popToggleState: false,
        };

        this.generateDateMenu();
        this.generatePOPMenu();
    }

    static menuIdPrefix() {
        return "DatePicker-Item-";
    }

    generateBtnText(index) {
        return this.dateMetaData[index].title + (_.isString(this.dateMetaData[index].element) ? ': ' + this.dateMetaData[index].element : '');
    }

    generateDateMenuItem(idAffix) {
        return {title: 'Custom',        element: (() => {
                return (
                    <span className="form-inline" id={"CustomizedDatePicker"+idAffix} style={{display: this.state.checkedIndex === 0 ? '' : 'none'}}>
                        <span className="form-group-xs">
                            <span className="input-daterange input-group">
                                <input type="text" className="form-control" name="start" />
                                <span className="input-group-addon">to</span>
                                <input type="text" className="form-control" name="end" />
                            </span>
                        </span>
                    </span>)
            })};
    }

    generatePOPMenu() {
        this.POPMetaData = [
            {title: 'Previous period',          element: null},
            {title: 'Same period last year',    element: null},
            this.generateDateMenuItem('POP'),
        ];
//            (this.state.popToggleState && <li className="fake-a"> <button type="button" className="btn btn-primary btn-sm">Apply</button> </li>),
    }

    generateDateMenu() {
        const today = new Date();
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        this.dateMetaData = [
            this.generateDateMenuItem('Date'),
           {title: 'Today',         element: today.toLocaleDateString()},
           {title: 'Yesterday',     element: (() => {
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
                        return last7Day.toLocaleDateString() + ' - ' + yesterday.toLocaleDateString();
                })()},  
           {title: 'Last week (Sun - Sat)',     element: (() => {
                        let dayOfToday = today.getDay();
                        let lastLastSunday = new Date(); 
                        let lastSaturday = new Date(); 

                        lastLastSunday.setDate(lastLastSunday.getDate() - 7 - dayOfToday);
                        lastSaturday.setDate(lastSaturday.getDate() - 1 - dayOfToday);

                        return lastLastSunday.toLocaleDateString() + ' - ' + lastSaturday.toLocaleDateString();

                        return yesterday.toLocaleDateString();
                })()},  
           {title: 'Last week (Mon - Sun)',     element: (() => {
                        let dayOfToday = today.getDay();
                        let lastMonday = new Date(); 
                        let lastSunday = new Date(); 

                        lastMonday.setDate(lastMonday.getDate() - 7 - dayOfToday + 1);
                        lastSunday.setDate(lastSunday.getDate() - dayOfToday);

                        return lastMonday.toLocaleDateString() + ' - ' + lastSunday.toLocaleDateString();
                })()},  
           {title: 'last 14 days',                element: (() => {
                        let last14Day = new Date(); last14Day.setDate(last14Day.getDate()-14);
                        return last14Day.toLocaleDateString() + ' - ' + yesterday.toLocaleDateString();
                })()},  
           {title: 'This month',                  element: (() => {
                        let beginningOfThisMonth = new Date(); 
                        beginningOfThisMonth.setDate(1);
                        return beginningOfThisMonth.toLocaleDateString() + ' - ' + today.toLocaleDateString();
                })()},  
           {title: 'Last month',                  element: (() => {
                        let beginningOfLastMonth = new Date(); 
                        let endOfLastMonth = new Date(); 

                        beginningOfLastMonth.setMonth(beginningOfLastMonth.getMonth() - 1);
                        beginningOfLastMonth.setDate(1);
                        endOfLastMonth.setDate(0);

                        return beginningOfLastMonth.toLocaleDateString() + ' - ' + endOfLastMonth.toLocaleDateString();
                })()},  
           {title: 'last 30 days',                element: (() => {
                        let last30Day = new Date(); last30Day.setDate(last30Day.getDate()-30);
                        return last30Day.toLocaleDateString() + ' - ' + yesterday.toLocaleDateString();
                })()},  
        ];
    }

    componentDidMount() {
        $('.dropdown.datepicker-dropdown button').on('click', function (event) {
            $(this).parent().toggleClass('open');
        });

        $('.dropdown.datepicker-dropdown > ul.dropdown-menu > li > a').on('click', function (e) {
            const index = parseInt(e.target.id.replace(DatePicker.menuIdPrefix(), ""), 10);

            if (index >= 0 && index < _.size(this.dateMetaData)) {
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

        $('[id^="CustomizedDatePicker"] .input-daterange').datepicker({
            clearBtn: true,
            keyboardNavigation: true,
            forceParse: true,
            todayHighlight: true
        });
    }

    popToggleDidChange(e) {
        this.setState({popToggleState:e.target.checked});
    }

    metaDataToMenu(metaData) {
        let index = 0;
        return _.map(metaData, (item) => {
            const additionalClass = this.state.checkedIndex === index ? "glyphicon-ok" : "";

            return (
                <li role="menuitem">
                    <a href="javascript:void(0)" id={DatePicker.menuIdPrefix() + index++}>
                        <span className={"glyphicon " + additionalClass}></span>
                        {item.title}
                        <span className="pull-right text-right" style={{width:'50%'}}>{_.isFunction(item.element) ? item.element() : item.element}</span>
                    </a> 
                </li>
            );
        });
    }

    render() {
        this.dateMenu = this.metaDataToMenu(this.dateMetaData);
        this.popMenu = this.metaDataToMenu(this.POPMetaData);

        return (
            <div className="dropdown datepicker-dropdown" style={{width:"500px"}}> 
                <button type="button" className="btn btn-default btn-sm btn-block">
                    <span className="pull-left bold">{this.generateBtnText(this.state.checkedIndex)}</span>
                    <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                </button>
                <ul className="dropdown-menu" style={{width:"100%"}}>
                    {this.dateMenu}
                    <li className="divider"></li>
            <li className="fake-a">
                {!this.state.popToggleState && (<button type="button" className="btn btn-primary btn-sm">Apply</button>)}
                <span className="pull-right">
                    <SwitchButton label="COMPARE" labelRight={this.state.popToggleState ? "On" : "Off"} defaultChecked={false} onChange={this.popToggleDidChange.bind(this)}/>
                </span>
            </li>
                    {this.state.popToggleState && this.popMenu}
                    {this.state.popToggleState && (<li className="fake-a"> <button type="button" className="btn btn-primary btn-sm">Apply</button> </li>)}
                </ul>
            </div>
        );      
    }
}

export default DatePicker;
