import React from 'react';
import _ from 'lodash';

class AlertGroup extends React.Component {
    constructor() {
        super();

        this.alerts = [
            {type:'info', msg:'Install BingAds Mobile', dismissable:true},
            {type:'warning', msg:'Review your disapproved ads (1) or disapproved keywords (2).', dismissable:true},
            {type:'error', msg:'You need a primary payment method before your ads will run. Add a payment method now', dismissable:false},
        ];

        this.alertMsgs = _.chain(this.alerts)
                            .each((item) => {
                                switch (item.type) {
                                    case 'info':
                                    default:
                                        item.priority = 0;
                                        item.className = 'alert-info';
                                        item.iconClassname = 'glyphicon-info-sign';
                                    break;

                                    case 'success':
                                        item.priority = 1;
                                        item.className = 'alert-success';
                                        item.iconClassname = 'glyphicon-ok-sign';
                                    break;

                                    case 'warning':
                                        item.priority = 2;
                                        item.className = 'alert-warning';
                                        item.iconClassname = 'glyphicon-warning-sign';
                                    break;

                                    case 'error':
                                    case 'danger':
                                        item.priority = 3;
                                        item.className = 'alert-danger';
                                        item.iconClassname = 'glyphicon-question-sign';
                                    break;
                                }
                            })
                            .sortBy((item) => item.priority * -1)
                            .map((item) => {
                                let closeBtnElement = "";
                                if (item.dismissable) {
                                    closeBtnElement = (
                                        <span className="close" data-dismiss="alert">&times;</span>
                                    );
                                }
                                return (
                                    <div className={"alert " + item.className} key={item.priority}>
                                        <span className={"glyphicon " + item.iconClassname}></span>
                                        {item.msg}
                                        {closeBtnElement}
                                    </div>
                                );

                            })
                            .value();
    }

    render() {
        return (
            <div className="alert-group">
                {this.alertMsgs}
            </div>
        );
    }
}

export default AlertGroup;