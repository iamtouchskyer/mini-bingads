import React, {Component} from 'react';
import $ from 'jquery';

class Grid extends Component {


    componentDidMount() {
        $('table th > input[type="checkbox"]').on("click", (e) => {
            if (e.target.checked) {
                e.target.indeterminate=true;
            }
        });
    }


    render() {
        return (
            <div>
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
                    <ul className="pager">
                        <li>
                            <a href="#">Previous</a>
                        </li>
                        <li>
                            <a href="#">Next</a>
                        </li>
                    </ul> 
            </div>
        )
    }
}

export default Grid;