import React, {Component} from 'react';
import $ from 'jquery';

class SegmentDropdown extends Component {
    constructor() {
        super();

        this.state = {segmentType: (this.props && this.props.segmentType) ? this.props.segmentType : 'None'};
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
    }

    componentWillUnmont() {
        $('#Segment .dropdown-submenu a.sub-dropdown-menu').off("click");
        $('.dropdown#Segment a:not(.sub-dropdown-menu)').off("click");
    }

    render() {
        return (
            <div className="dropdown" id="Segment">
                <button type="button" className="btn btn-default" data-toggle="dropdown">{this.props.fixedTitle ? this.props.title : this.state.segmentType}<span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="javascript:void(0)">None</a></li>
                    <li className="dropdown-submenu"><a href="javascript:void(0)" className="sub-dropdown-menu" data-toggle="dropdown">Time<span className="caret caret-right pull-right"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="javascript:void(0)">Day</a></li>
                            <li><a href="javascript:void(0)">Week</a></li>
                            <li><a href="javascript:void(0)">Month</a></li>
                            <li><a href="javascript:void(0)">Quarter</a></li>
                            <li><a href="javascript:void(0)">Year</a></li>
                            <li><a href="javascript:void(0)">Day of the week</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Device Type</a></li>
                    <li><a href="javascript:void(0)">Network</a></li>
                    <li><a href="javascript:void(0)">Top vs. other</a></li>
                </ul>
            </div>
        );
    }
}

export default SegmentDropdown;