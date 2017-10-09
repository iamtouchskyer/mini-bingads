import React, {Component} from 'react';
import _ from 'lodash';
import Dropdown from './dropdown.js';
import FilterItem from './filter-item.js';

const DecimalTypeDropdown = [
    {name: 'equals'},
    {name: 'does not equal'},
    {name: 'greater than'},
    {name: 'greater than or equals'},
    {name: 'less than'},
    {name: 'less than or equals'},
];

const StringTypeDropdown = [
    {name: 'contains'},
    {name: 'does not contain'},
    {name: 'begins with'},
    {name: 'ends with'},
    {name: 'equals'},
    {name: 'does not equal'},
];

const EnumTypeDropdown = [
    {name: 'contains'},
];

class Filter extends Component {
    constructor(props) {
        super(props);

        let /*elementType = this.props.entry && this.props.metaData.type[this.props.entry] && this.props.metaData.type[this.props.entry].elementType;
        let models = this.props.metaData.models[elementType];
        if (models)
            models = [models];
        else
  */          models = this.props.metaData.models;

        this.parseMetaData(models);
        this.state = {refresh:false};
        this.predicateItemList = [];
    }

    parseMetaData(models) {
        let enumModels = {};
        let regularModels = {};

        for (let modelKey in models) {
            if (_.isArray(models[modelKey])) {
                enumModels[modelKey] = models[modelKey];              
            } else 
            {
                regularModels[modelKey] = models[modelKey];              
            }
        }

        this.enumFilters = enumModels;
        this.filters = _.mapValues(regularModels, (model) => {
                                return _.mapValues(model, (subItem) => {
                                    if (subItem.type.startsWith('Edm')) {
                                        switch (subItem.type) {
                                            case 'Edm.String':
                                                return {
                                                    type: 'String',
                                                    dropdown: StringTypeDropdown,
                                                };
                                            break;

                                            case 'Edm.Int16':
                                            case 'Edm.Int32':
                                            case 'Edm.Int64':
                                            case 'Edm.SByte':
                                            case 'Edm.Float':
                                            case 'Edm.Double':
                                            case 'Edm.Decimal':
                                            case 'Edm.Byte':
                                                return {
                                                    type: 'Decimal',
                                                    dropdown: DecimalTypeDropdown,
                                                };
                                            break;

                                            case 'Edm.Binary':
                                            case 'Edm.Boolean':
                                            case 'Edm.DateTime':
                                            case 'Edm.DateTimeOffset':
                                            case 'Edm.Time':
                                            case 'Edm.Guid':
                                            default:
                                                return null;
                                            break;
                                        }
                                    } else {
                                        if (subItem.type === 'Array') {
                                            return null;
                                        } else {
                                            if (enumModels[subItem.type]) {
                                                return {
                                                    type: 'enum',
                                                    dropdown: EnumTypeDropdown,
                                                    options: enumModels[subItem.type],
                                                };
                                            } else {
                                                return null;
                                            }
                                        }
                                    }
                                });
                            }
                        );

        this.dropdownList = this.generateDropdownList(this.filters);
    }

    generateDropdownList(item) {
        let theArray = [];
        _.forIn(item, (value, key) => {
            if (_.isObject(value) && !(_.has(value, 'dropdown') && _.has(value, 'type'))) {
                theArray.push({
                    name: key,
                    children: this.generateDropdownList(value)
                });
            } else if (!(_.isNull(value) || _.isUndefined(value))) {
                theArray.push({
                    name: key,
                });
            }
        });

        return theArray;
    }

    addAnotherDidClick() {
        this.predicateItemList.push({key:_.uniqueId()});
        this.setState({refresh: !this.state.refresh});
    }

    removeDidClick(node, event) {
        let index = _.findIndex(this.predicateItemList, (item) => item.key === node.key);
        this.predicateItemList.splice(index, 1);
        this.setState({refresh: !this.state.refresh});
    }

    addDidClick(node, event) {
        let index = _.findIndex(this.predicateItemList, (item) => item.key === node.key);
        this.predicateItemList.splice(index+1, 0, {key:_.uniqueId()});
        this.setState({refresh: !this.state.refresh});
    }

    applyDidClick(event) {
        const isValid = _.some(this.predicateItemList, (predicateItem) => {
            return predicateItem.isValid();
        });

        if (isValid) {
            this.props.callBack && this.props.callBack('FilterDidApply');
        }
    }

    cancelDidClick(event) {
        this.props.callBack && this.props.callBack('FilterDidCancel');
    }

    render() {
        let filters = _.map(this.predicateItemList, (item) => {
            return (
                <div className="form-inline" key={item.key}>
                    <div className="form-group">
                        <span className="glyphicon glyphicon-plus" tabIndex={0} role="button" onClick={_.bind(this.addDidClick, this, item)}></span>
                        <span className="glyphicon glyphicon-remove" tabIndex={0} role="button" onClick={_.bind(this.removeDidClick, this, item)}></span>
                    </div>
                    <FilterItem key={item.key} dropdownList={this.dropdownList} filters={this.filters} enums={this.enumFiltrs}/>
                </div>
            );
        });

        return (
            <div className="panel panel-default filter">
                <div className="panel-heading">
                    Filter
                </div>
                <div className="panel-body">
                    {filters}

                    <div className="form-group">
                        <span className="glyphicon glyphicon-plus" onClick={this.addAnotherDidClick.bind(this)}></span>
                        <a href="javascript:void(0)" tabIndex={0} role="button" onClick={this.addAnotherDidClick.bind(this)}> Add another </a>
                    </div>

                    <div className="form-inline">
                        <div className="form-group">
                            <div className="btn-toolbar">
                                <div className="btn-group"><button className="btn btn-primary" onClick={this.applyDidClick.bind(this)}>Apply</button></div>
                                <div className="btn-group"><button className="btn btn-default" onClick={this.cancelDidClick.bind(this)}>Cancel</button></div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="checkbox">
                                <label><input type="checkbox"/>Save filter</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="text" size={32} placeholder="Options: type a filter name" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Filter;