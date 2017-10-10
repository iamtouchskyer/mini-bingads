import React, {Component} from 'react';
import _ from 'lodash';
import InputField from './input-field.js';
import Checkboxes from './checkbox-group.js';
import Dropdown from './dropdown.js';

function deepFind(object, key) {
    let _deepFind = (object, key) => {
        if (!_.isObject(object)) {
            return null;
        }

        if (_.has(object, key)) {
            return object[key];
        }

        for (let subKey in object) {
            let res = _deepFind(object[subKey], key);
            if (_.isObject(res)) {
                return res;
            }
        }

        return null;
    };

    return _deepFind(object, key);
}

class FilterItem extends Component {
    constructor(props) {
        super(props);

        this.dropdownList = props.dropdownList;
        this.filters = props.filters;
        this.enumFilters = props.enums;

        this.state = ({
            operationDropdown: null,
            inputField: null,
        });
    }

    onFilterItemChanged(item) {
        const res = deepFind(this.filters, item.name);
        if (res) {
            if (res.type === 'enum' && res.options) {
                this.setState({
                    inputField: <Checkboxes options={res.options} />
                });
            } else {
                this.setState({
                    inputField: <InputField key={_.uniqueId()} integerOnly={res.type === 'Decimal'}/>
                });
            }
            
            this.setState({
                operationDropdown: res.dropdown
            });
        }
    }

    isValid() {
        if (!this.state.inputField) {
            return true;
        } else {
            return this.state.inputField.isValid();
        }
    }

    onOperationItemChanged(item) {

        console.log(item);
    }

    render() {
        return (
            <div className="filter-item form-group">
                <div className="form-group">
                    <Dropdown sameWidthAsParent={true} list={this.dropdownList} itemPerPage={100} onClick={this.onFilterItemChanged.bind(this)}/> 
                </div>
                <div className="form-group">
                    {this.state.operationDropdown && (<Dropdown sameWidthAsParent={true} list={this.state.operationDropdown} />)}
                </div> 
                <div className="form-group"> 
                    {this.state.operationDropdown && this.state.inputField}
                </div>
            </div>
        );
    }
};

export default FilterItem;