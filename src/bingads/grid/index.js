import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'underscore';
import { Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

_.mixin({
    treeHeight: (object) => {
        if (_.isUndefined(object)) {
            return 0;
        }

        var maxHeight = 0;
        _.each(object, (objectItem) => {
            if (_.isArray(objectItem)) {
                objectItem = objectItem[0];
            }
            
            if (_.isObject(objectItem)) {
                var height = _.treeHeight(objectItem);

                if (height > maxHeight) {
                    maxHeight = height;
                }
            } 
        });

        return maxHeight + 1;
    },

    allFlattenRecursiveKeys: (object) => {
        if (_.isUndefined(object)) {
            return null;
        }

        return _.flatten(_.allRecursiveKeys(object));
    },

    allRecursiveKeys: (object) => {
        if (_.isUndefined(object)) {
            return null;
        }

        var allKeys = _.map(_.allKeys(object), (itemKey) => {
            var subObject = object[itemKey]; 
            if (_.isArray(subObject)) {
                subObject = subObject[0];
            }

            if (_.isObject(subObject)) {
                return _.chain(subObject)
                                .allRecursiveKeys()
 //                             .map((subKey) => itemKey + '.' + subKey)
                                .value();
            } else {
                return itemKey;
            }
        });

        return allKeys;
    },

    tableHeader: (tableThs, object, index) => {
        if (_.isUndefined(object)) {
            return;
        }

        const maxHeight = _.treeHeight(object);
        _.each(_.allKeys(object), (key) => {
            var subObject = object[key]; 
            if (_.isArray(subObject)) {
                subObject = subObject[0];
            }

            if (_.isObject(subObject)) {
                 tableThs[index].push(<th rowSpan="1" colSpan={_.size(_.allFlattenRecursiveKeys(subObject))} style={{vertialAlign:"top"}}>
                    <span className="glyphicon glyphicon-triangle-bottom"></span>
                 {key}</th>);

                 _.tableHeader(tableThs, subObject, index+1);
            } else {
                tableThs[index].push((<th rowSpan={maxHeight} colSpan="1">{key}</th>));
            }
        });
    },

    tableHeaders: (object) => {
        if (_.isUndefined(object)) {
            return null;
        }

        var tableThs = [[],[],[],[],[]];

        _.tableHeader(tableThs, object, 0);

        return _.map(tableThs, (tableTh) => {
                return (<tr>{tableTh}</tr>);
            });
    }
  });

class Grid extends Component {

/*
    tableCols(object) {
        if (_.isUndefined(object)) {
            return null;
        }
        function calculateTableCol(object, height) {
            if (_.isUndefined(object)) {
                return null;
            }

            var allColmns = _.map(_.allKeys(object), (itemKey) => {
                var subObject = object[itemKey]; 
                if (_.isArray(subObject)) {
                    subObject = subObject[0];
                }

                if (_.isObject(subObject)) {
                    return _.chain(subObject)
                                    .calculateTableCol()
                                    .map((subKey) => itemKey + '.' + subKey)
                                    .value();
                } else {
                    return {key: itemKey, hidden:false};
                }
            });

        }

        return allKeys;
    }
*/
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

                this.titles = _.tableHeaders(responseObj.value[0]);
                this.rows = _.map(responseObj.value, (item) => {
                    let cols = _.map(_.values(item), (val) => {
                        if (_.isArray(val)) {
                            val =  val[0];
                        } 

                        if (_.isObject(val)) {
                            return 'Object';
                        } else if (_.isNull(val)) {
                            return "";
                        } else {
                            return val;
                        }
                    });

                    return _.flatten(cols);
                });

                this.setState({blocking: false});
            }
        };
        setTimeout(() => {xhr.send()}, 1000);
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
                                {this.titles}
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