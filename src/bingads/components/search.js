import React, {Component} from 'react';

class SearchControl extends Component {
    onSearch(event) {
        this.props.onSearch && this.props.onSearch(this.searchValue);
    }

    onType(event) {
        this.searchValue = event.target.value;

        this.props.onType && this.props.onType(event.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <div className="input-group input-group-sm">
                <input type="text" placeholder="Search" className="form-control" onChange={this.onType.bind(this)} />
                <div className="input-group-addon cursor-pointer" onClick={this.onSearch.bind(this)}><span className="glyphicon glyphicon-search"></span></div>
                </div>
            </div>
        );
    }
};

export default SearchControl;