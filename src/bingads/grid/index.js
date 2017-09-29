import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import DropDown from '../components/dropdown.js';

import { DataStore, Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import xml2json from 'fast-xml-parser';

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
    }

    componentWillMount() {
        this.doFetch('people');
    }

    doFetch(key) {
        this.setState({blocking: true});
        this.store.findAll(key)
            .then((peoples) => {
                if (_.isArray(peoples)) {
                    peoples = peoples[0];
                }

                this.titles = _.keys(peoples.value[0]);

                const val = peoples.value; //_.take(peoples.value, _.size(peoples.value)-2);
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
        this.doFetch(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="form-group list-group">
                    <label className="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="people" onClick={this.dropdownDidClick.bind(this)}/> people
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="airport" onClick={this.dropdownDidClick.bind(this)}/> airport
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="airline" onClick={this.dropdownDidClick.bind(this)}/> airline
                    </label>
                </div>
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

import * as JayData from 'jaydata';
import * as JayDataDynamicMetaData from 'jaydata-dynamic-metadata';

        let metaData = new JayDataDynamicMetaData.DynamicMetadata({});

        metaData.service('http://services.odata.org/V4/Northwind/Northwind.svc/$metadata', {method: "GET"})
            .then(function (context) {
                console.log(context);
            });

      JayData.initService('http://services.odata.org/V4/Northwind/Northwind.svc')
            .then(function (context) {
                console.log(context);
            });

           var context = new JayData.EntityContext({
            name: 'oData',
            oDataServiceHost: 'http://services.odata.org/TripPinRESTierService/(S(amtixogn1ls3yvjfwqh2lqib))/'
        });
        
        context.onReady(function (...args) {
            console.log(args);
        });
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
            //   let xmlDoc = xml2json1(xhr.responseText);
              let xmlDoc = xml2json.parse(xhr.responseText);
              console.log(xmlDoc);

            //    console.log(xml2json);
            }
        };
        xhr.open("GET", "http://services.odata.org/V4/Northwind/Northwind.svc/", true);
        xhr.send();
*/