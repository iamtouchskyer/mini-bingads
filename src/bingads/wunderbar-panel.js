import React from 'react';
import _ from 'lodash';
import Tree from './components/tree.js';

class WunderbarPanel extends React.Component {
    constructor() {
        super();

        this.metaData = [
            {
                title: "All Campaigns", children: [
                    {title:'Campaig111', link:'#', children: [
                        {title:'AdGroup #1', children: [
                                {title:'AdGroup #2', link:'#'},
                                {title:'AdGroup #3', link:'#'},
                                {title:'AdGroup #4', link:'#'},
                            ]},
                        {title:'AdGroup #2', link:'#'},
                        {title:'AdGroup #3', link:'#'},
                        {title:'AdGroup #4', link:'#'},
                        {title:'AdGroup #5', link:'#'},
                    ]},
                    {title:'Campaig112n', link:'#'},
                    {title:'Campaig212n', link:'#'},
                    {title:'Campaig232n', link:'#'},
                    {title:'Campaig252n', link:'#'},
                    {title:'Campaig221m', link:'#'},
                    {title:'Campaig222m', link:'#'},
                    {title:'Campaig223m', link:'#'},
                ],
            },
            {
                title: "Shared Library", children: [
                    {title:'Audience', link:'#AudiencePage'},
                    {title:'Budget', link:'#'},
                    {title:'Negative keywords', link:'#NegativeKeywordsPage'},
                    {title:'URL options', link:'#URLOptionsPage'},
                ],
            },
            {
                title: "Conversion Tracking", children: [
                    {title:'UET tags', link:'#UETTagsPage'},
                    {title:'Conversion goals', link:'#ConversionGoalsPage'},
                ],
            },
            {
                title: "Bulk Operations", children: [
                    {title:'Automated rules', link:'#AutomatedRulesPage'},
                    {title:'Bulk edits', link:'#BulkEditsPage'},
                ],
            },
        ];

        this.panels = _.map(this.metaData, (item) => {

            let list = <Tree data={item.children} />;
            /*
            let list = _.map(item.children, (subItem) => {
                return (
                    <li className="list-group-item"><span className="cursor-pointer" data-toggle="tab" data-target={subItem.link}>{subItem.title}</span></li>
                );
            });
            */

            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span className="cursor-pointer" data-toggle="collapse" data-target={"#" + item.title.replace( /\s/g, "")}>{item.title}</span>
                    </div>

                    <div className="panel-collapse collapse in" id={item.title.replace( /\s/g, "")}>
                        <ul className="list-group">
                            {list}
                        </ul>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="panel-group">
                {this.panels}
            </div>

        );
    }

}

export default WunderbarPanel;