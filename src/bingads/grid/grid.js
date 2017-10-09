import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import { DataStore, Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blocking: true,
        };

        this.titles = [];
        this.rows = [];

        this.store = new DataStore();
        
        this.httpAdapter = new HttpAdapter({
            // Instead of using relative urls, force absolute
            // urls using this basePath
            basePath: props.metaData.oDataServiceHost
        });
        
        this.store.registerAdapter('http', this.httpAdapter, { 'default': true });

        _.each(props.entries, (entryVal, entryKey) => {
            this.store.defineMapper(entryKey, { endpoint: entryKey });
        }, this);
    }

    componentWillMount() {
        this.doFetch(this.props.entry);
    }

    componentWillReceiveProps(nextProps) {
        this.doFetch(nextProps.entry);
    }

    doFetch(endpoint) {
        this.setState({blocking: true});

        const metaData = this.props.metaData;
        const modelOfEndpoint = metaData.models[metaData.type[endpoint].elementType];
        const titles = _.keys(modelOfEndpoint);

        this.store.findAll(endpoint)
            .then((result) => {
                if (_.isArray(result)) {
                    result = result[0];
                }

                this.titles = _.keys(modelOfEndpoint);
                this.rows = _.map(result.value, (rowData) => {
                    let cols = _.map(this.titles, (key) => {
                        const value = rowData[key];
                        if (_.isArray(value)) {
                            return "Array";
                        } else if (_.isObject(value)) {
                            return "Object";
                        } else if (_.isNull(value)) {
                            return "Null";
                        } else {
                            const IsValidBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
                            if (modelOfEndpoint[key].type === 'Edm.Binary' && IsValidBase64.test(value)) {
                                const src = "data:image/png;base64, " + value.substr(104);
                                return (<img src={src}/>);
                            } else {
                                return value;
                            }
                        }
                    });

                    return cols;
                });

                this.setState({blocking: false});
            });     
    }


    render() {
        return (
            <div>
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

import $data from 'jaydata';
import xml2json from 'fast-xml-parser';
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