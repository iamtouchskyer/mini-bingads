import React, {Component} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            validationResult: null,
        };
    }

    validate() {
        let validationResult = 'Success';
        if (this.state.inputValue === '') {
            validationResult = 'Fail';
        } else {
            if (this.props.integerOnly) {
                if (this.state.inputValue.search(/^[a-zA-Z]*$/) >= 0) {
                    validationResult = 'Fail';
                }
            }
        }

        this.setState({validationResult: validationResult});
    }

    isValid() {
        this.validate();

        return this.state.validationResult === 'Success';
    }

    onBlur() {
        this.validate();
    }
    
    onFocus() {
        this.setState({validationResult: null});
    }

    clearInput() {
        this.setState({
            inputValue: '',
            validationResult: null
        });
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }

    render() {
        const errorClass = this.state.validationResult ? (this.state.validationResult === 'Success' ? 'has-success' : 'has-error') : '';
        const errorIcon = this.state.validationResult ? (this.state.validationResult === 'Success' ? 'glyphicon-ok-sign ' : 'glyphicon-warning-sign') : '';

        return (
            <div className={classNames('has-feedback', 'input-group', errorClass)}>
                <span className="glyphicon glyphicon-remove input-group-addon mouse-pointer" tabIndex={0} role="button" onClick={this.clearInput.bind(this)}></span>
                <input 
                    type="text" 
                    size={64} 
                    maxLength={128} 
                    className="form-control" 
                    aria-required="true" 
                    value={this.state.inputValue} 
                    onChange={this.updateInputValue.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                />
                <span className={classNames('glyphicon', 'form-control-feedback', errorIcon)}></span>
            </div>
        );
    }
};

export default InputField;
