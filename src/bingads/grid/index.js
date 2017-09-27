import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import { Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import JayData from 'jaydata';

class Grid extends Component {
    constructor() {
        super();

        this.state = {
            blocking: true
        };

        this.titles = [];
        this.rows = [];

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://services.odata.org/TripPinRESTierService/People', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const responseObj = JSON.parse(xhr.responseText);

                this.titles = _.keys(responseObj.value[0]);

                const val = _.take(responseObj.value, _.size(responseObj.value)-2);
                this.rows = _.map(val, (item) => {
                    let cols = _.map(_.values(item), (val) => {
                        if (_.isArray(val)) {
                            return "Array";
                        } else if (_.isObject(val)) {
                            return "Object";
                        } else if (_.isNull(val)) {
                            return "Null";
                        } else {
                            return val;
                        }
                    });

                    return cols;
                });

                this.setState({blocking: false});
            }
        };
        setTimeout(() => {xhr.send()}, 1000);

/*
        let db = new JayData.EntityContext("https://services.odata.org/V3/Northwind/Northwind.svc/");

        db.onReady((...args) => {
            console.log(args);
        });
        */
    }

    componentDidMount() {
        $('table th > input[type="checkbox"]').on("click", (e) => {
            if (e.target.checked) {
                e.target.indeterminate=true;
            }
        });
    }

    render() {
        return (
            <div >
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {this.titles.map(title => <th key={title}>{title}</th>)}
                            </tr>
                        </thead> 
                        <tbody>
                            {this.rows.map((row, i) => <tr key={i}> {row.map((col, j) => <td key={j}>{col}</td>)}</tr>)}
                        </tbody>
                    </table>
                    <ul className="pager">
                        <li>
                            <a href="#">Previous</a>
                        </li>
                        <li>
                            <a href="#">Next</a>
                        </li>
                    </ul> 
                </BlockUi>
            </div>
        )
    }
}

export default Grid;

/*

                <table className="table table-bordered table-hover">
                    <thead> 
                        <tr>
                        <th><input type="checkbox"/></th>
                        <th>Status</th>
                        <th>Campaign</th>
                        <th>Budget</th>
                        <th>Delivery</th>
                        <th>Campaign Type</th>
                        <th>Big strategy type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr><td><input type="checkbox"/></td> <td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 1</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 2</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 3</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 4</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 6</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 1</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 2</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 3</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 4</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 6</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 1</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 2</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 3</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 4</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 6</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 1</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 2</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 3</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 4</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                        <tr><td><input type="checkbox"/></td><td><span className="glyphicon glyphicon-ok"></span></td><td>Campaign 6</td><td>519.08/day</td><td>Eligible</td><td>Search & content</td><td>Manual</td></tr> 
                    </tbody>
                </table>

*/