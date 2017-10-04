import React, {Component} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            errorStr: '',
        };
    }

    validate() {
        if (this.state.inputValue === '') {
            this.setState({
                errorStr: 'Empty Field'
            });
        } else {
            if (this.props.integerOnly) {
                ;
            }
        }
    }

    onBlur() {
        this.validate();
    }

    clearInput() {
        this.setState({inputValue: ''});
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }

    render() {
        return (
            <div className={classNames('has-feedback', 'input-group', this.state.errorStr && 'has-error')} >
                <span className="glyphicon glyphicon-remove input-group-addon mouse-pointer" tabIndex={0} role="button"></span>
                <input 
                    type="text" 
                    size={64} 
                    maxLength={128} 
                    className="form-control" 
                    aria-required="true" 
                    value={this.state.inputValue} 
                    onChange={this.updateInputValue.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                />
                {this.state.errorStr && (<span className="glyphicon glyphicon-warning-sign form-control-feedback"></span>)}
            </div>
        );
    }
};

export default InputField;
