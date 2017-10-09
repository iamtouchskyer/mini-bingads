import React, {Component} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorStr: '',
        };

        this.checkboxes = _.map(props.options, (checkboxItem) => {
            const theKey = _.uniqueId("CheckboxGroup");
            return (
                    <label className="checkbox-inline" key={theKey}>
                    <input
                        type="checkbox"
                        id={theKey}
                        value={checkboxItem.value ? checkboxItem.value : checkboxItem.name} 
                        onChange={_.bind(this.onChange, this, checkboxItem)}
                    />
                        {checkboxItem.name} 
                    </label>
            );
        });
    }

    validate() {

    }

    isValid() {
        return true;
    }

    onChange(item, event) {
        
    }

    render() {
        return (
            <div>
            {this.checkboxes}
            </div>
        );
    }
}

export default CheckboxGroup;