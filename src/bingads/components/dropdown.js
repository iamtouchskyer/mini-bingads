import React, {Component} from 'react';
import _ from 'lodash';
import $ from 'jquery';
import classNames from 'classnames';
import Search from './search.js';
import Pagination from './pagination.js';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show1stLevelDropdown: false,
            showSubMenu: {},
            refreshNeeded: false,
            title: this.props.list[0].name,
        };

        this.config = {
            title: this.props.title,
            enableSearch: this.props.enableSearch,
            list: _.map(this.props.list, (listItem) => {
                listItem['DropdownItemId'] = _.uniqueId('DropdownItem');
                return listItem;
            }),
            selectedIndex: this.props.slectedIndex ? this.props.selectedIndex : 0,
            itemPerPage: this.props.itemPerPage ? this.props.itemPerPage : 10,
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
                this.setState({
                    show1stLevelDropdown: false
                });
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
            list.push(this.generateMenuItem(item));
        }

        return list;
    }

    generateMenuItem(item) {
        if (_.isUndefined(item.children)) {
            return (<li key={item.id}><a href="javascript:void(0)" role='menuitem' onClick={_.bind(this.onNonSubMenuItemSelect, this, item)}>{item.name}</a></li>);
        } else {
            return (
                <li className="dropdown-submenu" key={item.DropdownItemId}>
                    <a href="javascript:void(0)" 
                        className="sub-dropdown-menu" 
                        data-toggle="dropdown" 
                        onClick={_.bind(this.onSubMenuItemSelect, this, item)}
                    >
                        {item.name}
                        <span className="caret caret-right pull-right"></span>
                    </a>
                    <ul className={classNames('dropdown-menu', this.state.showSubMenu[item.DropdownItemId] && 'open')}> 
                        {_.map(item.children, this.generateMenuItem.bind(this))}
                    </ul>
                </li>
            );
        }
    }

    onButtonClick(event) {
        this.setState({
            show1stLevelDropdown: !this.state.show1stLevelDropdown
        });
    }

    onNonSubMenuItemSelect(item, event) {
        this.setState({
            show1stLevelDropdown: false
        });

        if (!this.props.fixedTitle) {
            this.setState({title: item.name});
        }

        if (this.props.onClick) {
            this.props.onClick(item);
        }
    }

    onSubMenuItemSelect(item, event) {
        let subMenu = this.state.showSubMenu;
        if (_.isUndefined(subMenu[item.DropdownItemId])) {
            subMenu[item.DropdownItemId] = true;
        } else {
            subMenu[item.DropdownItemId] = !subMenu[item.DropdownItemId];
        }

        this.setState({
            showSubMenu: subMenu
        });
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
            <div className={classNames('dropdown', this.state.show1stLevelDropdown && 'open')} id={this.id}>
                <button className={classNames('btn', 'btn-default', this.props.sameWidthAsParent && 'btn-block')} type="button" onClick={this.onButtonClick.bind(this)}>
                    {this.props.fixedTitle ? this.props.title : this.state.title}
                    <span className="caret pull-right"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                    {this.config.enableSearch && (<li><Search onSearch={this.onSearch.bind(this)} onType={this.onType.bind(this)} /></li>)}
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