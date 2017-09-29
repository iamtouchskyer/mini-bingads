import React, {Component} from 'react';
import _ from 'lodash';
import $ from 'jquery';
import Search from './search.js';
import Pagination from './pagination.js';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {refreshNeeded: false};

        this.config = {
            title: this.props.title,
            enableSearch: this.props.enableSearch,
            list: this.props.list,
            selectedIndex: this.props.slectedIndex ? this.props.selectedIndex : 0,
            itemPerPage: this.props.itemPerPage ? this.props.itemPerpage : 10,
        };

        this.paginationControl = {
            enablePagination: false,
            currentPage: 0,
            disablePrevious: false,
            disableNext: false,
        };

        this.searchControl = {
            predicateString: '',
            timer: null,
        };

        this.id = _.uniqueId("SearchPaginationDropdown");
    }

    componentDidMount() {
        // Remove data-toggle="dropdown" and handle by ourself
        $('body').on('click', function (e) {
            if (!$("#"+this.id).is(e.target) 
                && $("#"+this.id).has(e.target).length === 0 
                && $('.open').has(e.target).length === 0
            ) {
                $("#"+this.id).removeClass('open');
            }
        }.bind(this));
    }

    generateList() {
        let finalList = this.config.list;

        if (this.searchControl.predicateString) {
            const predicateString = this.searchControl.predicateString.toLowerCase();
            finalList = _.filter(finalList, (item) => item.name.toLowerCase().includes(predicateString));
        }

        this.paginationControl.enablePagination = _.size(finalList) > this.config.itemPerPage;
        this.paginationControl.disablePrevious = this.paginationControl.currentPage === 0;
        this.paginationControl.disableNext = this.paginationControl.currentPage === parseInt(_.size(finalList) / this.config.itemPerPage, 10);
        
        const start = this.config.itemPerPage * this.paginationControl.currentPage;
        const end = Math.min(start+this.config.itemPerPage, _.size(finalList));

        let list = [];
        for (let i=start; i<end; i++) {
            const item = finalList[i];
            list.push((<li key={"menuitem" + i}><a href="#" role="menuitem"  id={"menuitem" + i} onClick={this.onMenuItemSelect.bind(this)}>{item.name}</a></li>));
        }

        return list;
    }

    onButtonClick(event) {
        $("#"+this.id).toggleClass('open');
    }

    onMenuItemSelect(event) {
        $("#"+this.id).removeClass('open');

        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    onPaginationClickPrevious(event) {
        this.paginationControl.currentPage--;

        this.setState({refreshNeeded:!this.state.refreshNeeded});
    }

    onPaginationClickNext(event) {
        this.paginationControl.currentPage++;

        this.setState({refreshNeeded:!this.state.refreshNeeded});
    }

    onType(value) {
        if (this.searchControl.timer) {
            clearTimeout(this.searchControl.timer);
            this.searchControl.timer = null;
        }

        this.searchControl.timer = setTimeout(this.doSearch.bind(this, value), 500);
    }

    onSearch(value) {
        this.doSearch(value);
    }

    doSearch(value) {
        if (value.toLowerCase() !== this.searchControl.predicateString.toLowerCase()) {
            this.resetForSearch();
            this.searchControl.predicateString = value;
        }

        this.setState({refreshNeeded:!this.state.refreshNeeded});
    }

    resetForSearch() {
        this.paginationControl.enablePagination = false;
        this.paginationControl.currentPage = 0;
        this.paginationControl.disablePrevious = false;
        this.paginationControl.disableNext = false;
    }

    render() {
        this.finalList = this.generateList();

        return (
            <div className="form-group dropdown" id={this.id}>
                <label className="control-label">{this.config.title}</label>
                <button className="btn btn-default btn-block" type="button" onClick={this.onButtonClick.bind(this)}>{this.config.list[this.config.selectedIndex].name}<span className="glyphicon glyphicon-chevron-down pull-right"></span></button>
                <ul className="dropdown-menu" role="menu">
                    {this.config.enableSearch && (<li><Search onSearch={this.onSearch.bind(this)} onType={this.onType.bind(this)}/ ></li>)}
                    {this.finalList}
                    {this.paginationControl.enablePagination && 
                        (<li><Pagination 
                                clickPrevious={this.onPaginationClickPrevious.bind(this)} 
                                clickNext={this.onPaginationClickNext.bind(this)} 
                                disablePrevious={this.paginationControl.disablePrevious}
                                disableNext={this.paginationControl.disableNext}
                        /></li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Dropdown;