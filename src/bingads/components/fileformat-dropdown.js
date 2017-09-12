import React, {Component} from 'react';
import _ from 'underscore';
import $ from 'jquery';

class FileFormatDropdown extends Component {
    constructor() {
        super();

        this.fileTypes = [
            {title: '.csv'},
            {title: '.tsv'},
            {title: '.xlsx'},
            {title: '.zip (.csv)'},
        ];

        this.fileTypeElement = _.map(this.fileTypes, (item) => {
            return (<li><a href="javascript:void(0)">{item.title}</a></li>);
        });

        this.state = {fileType: (this.props && this.props.fileType) ? this.props.fileType : this.fileTypes[0].title};
    }

    componentDidMount() {
        $('.dropdown#FileFormat a').on("click", function(e){
            this.setState({fileType: e.target.text});
        }.bind(this));
    }

    render() {
        return (
            <div className="dropdown" id="FileFormat">
                <button type="button" className="btn btn-default" data-toggle="dropdown">{this.state.fileType}<span className="caret"></span></button>
                <ul className="dropdown-menu">
                    {this.fileTypeElement}
                </ul>
            </div>
        );
    }
}

export default FileFormatDropdown;