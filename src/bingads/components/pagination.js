import React, {Component} from 'react';
import classNames from 'classnames';

class Pagination extends Component {
    clickPrevious() {
        if (this.props.disablePrevious)
            return;

        this.props.clickPrevious && this.props.clickPrevious();
    }

    clickNext() {
        if (this.props.disableNext)
            return;

        this.props.clickNext && this.props.clickNext();
    }

    render() {
        return (
            <ul className="pager inline-pager">
                <li className={classNames('previous', this.props.disablePrevious && 'disabled', 'previous')}><a href="#" id="PaginationPrevious" tabIndex={0} onClick={this.clickPrevious.bind(this)} >Previous</a></li>
                <li className={classNames(this.props.disableNext && 'disabled', 'next')}><a href="#" id="PaginationNext" tabIndex={0} onClick={this.clickNext.bind(this)} >Next</a></li>
            </ul>
        );
    }
};

export default Pagination;
