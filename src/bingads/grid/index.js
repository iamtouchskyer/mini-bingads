import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import { DataStore, Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import DropDown from '../components/dropdown.js'

class Grid extends Component {
    constructor() {
        super();

        this.state = {
            blocking: true,
        };

        this.titles = [];
        this.rows = [];

        this.store = new DataStore();
        this.httpAdapter = new HttpAdapter({
            // Instead of using relative urls, force absolute
            // urls using this basePath
            basePath: 'http://services.odata.org/TripPinRESTierService/',
        });
        
        this.store.registerAdapter('http', this.httpAdapter, { 'default': true });
        this.store.defineMapper('people', { endpoint: 'People' });
        this.store.defineMapper('airline', { endpoint: 'Airlines' });
        this.store.defineMapper('airport', { endpoint: 'Airports' });
        this.store.defineMapper('newpeople', { endpoint: 'NewComePeople' });

        this.doFetch('people');
    }

    doFetch(key) {
        this.store.findAll(key)
            .then((peoples) => {
                this.titles = _.keys(peoples.value[0]);

                const val = _.take(peoples.value, _.size(peoples.value)-2);
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
            });     
    }

    dropdownDidClick(event) {
        this.doFetch(event.target.text);
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
            <div>
                <span><DropDown enableSearch={false} list={[{name:'people'}, {name:'airline'}, {name:'airport'}, {name:'newpeople'}]} onClick={this.dropdownDidClick.bind(this)}/></span>
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
