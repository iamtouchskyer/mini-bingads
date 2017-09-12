import React, {Component} from 'react';
import _ from 'underscore';
import $ from 'jquery';

class SegmentDropdown extends Component {
    constructor() {
        super();

        this.state = {
            segmentType: (this.props && this.props.segmentType) ? this.props.segmentType : 'None',
        };

        this.generateSegmentDropdown();
    }

    generateSegmentMenuItem(item) {
        if (_.isUndefined(item.children)) {
            return (<li><a href="javascript:void(0)" id={'Segment' + item.id}>{item.title}</a></li>);
        } else {
            return (
                <li className="dropdown-submenu">
                        <a href="javascript:void(0)" id={'Segment + item.id'} className="sub-dropdown-menu" data-toggle="dropdown">{item.title}
                            <span className="caret caret-right pull-right"></span>
                        </a>
                    <ul className="dropdown-menu">
                        {_.map(item.children, this.generateSegmentMenuItem.bind(this))}
                    </ul>
                </li>
            );
        }
    }

    generateSegmentDropdown() {
        const metaData = [
            {id: 'none', title: 'None'},
            {id: 'time', title: 'Time', children: [
                    {id: 'day', title: 'Day'},
                    {id: 'week', title: 'Week'},
                    {id: 'month', title: 'Month'},
                    {id: 'quarter', title: 'Quarter'},
                    {id: 'year', title: 'Year'},
                    {id: 'dow', title: 'Day of the week'},
                ]},
            {id: 'devicetype', title: 'Device Type'},
            {id: 'network', title: 'Network'},
            {id: 'tvso', title: 'Top vs. other'},
        ];

        this.dropdownMenu = (
                <ul className="dropdown-menu">
                    {_.map(metaData, this.generateSegmentMenuItem.bind(this))}
                </ul>
        );
    }

    componentDidMount() {
        $('#Segment .dropdown-submenu a.sub-dropdown-menu').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
          });

        $('.dropdown#Segment a:not(.sub-dropdown-menu)').on("click", function(e){
            this.setState({segmentType: e.target.text});
        }.bind(this));

        $('#Segment').on("hide.bs.dropdown", function(e){
            $('#Segment .dropdown-submenu a.sub-dropdown-menu').next('ul').hide();
        });
    }

    componentWillUnmont() {
        $('#Segment .dropdown-submenu a.sub-dropdown-menu').off("hide.bs.dropdown");
        $('#Segment .dropdown-submenu a.sub-dropdown-menu').off("click");
        $('.dropdown#Segment a:not(.sub-dropdown-menu)').off("click");
    }

    render() {
        return (
            <div className="dropdown" id="Segment">
                <button type="button" className="btn btn-default" data-toggle="dropdown">{this.props.fixedTitle ? this.props.title : this.state.segmentType}
                        <span className="caret"></span>
                </button>
                {this.dropdownMenu}
            </div>
        );
    }
}

export default SegmentDropdown;