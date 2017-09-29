import React, {Component} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class Tree extends Component {
    constructor(props) {
        super(props);

        /*
        [
            {
            title:
            children:
            }
        ]
        */
        this.config = {
            treeData: null
        };

        if (_.isArray(props.data)) {
            this.config.treeData = {title: null, children: props.data};
        } else {
            this.config.treeData = props.data;
        }
    } 
    
    onChildNodeClicked() {}

    buildTree(treeNode, uniqueId) {
        const childrenTree = 
             _.map(treeNode.children, (childNode) => {
                    const id = _.uniqueId('treenode_');
                    if (childNode.children) {
                        return (<li key={id}>
                                    <span className="curosr-pointer" tabIndex={0} role="button" data-toggle="collapse" data-target={"#" + id}>{childNode.title}</span>
                                    {this.buildTree(childNode, id)}
                                </li>);
                    } else {
                        return (<li className="leaf-node" key={id}><span className="cursor-pointer" tabIndex={0} role="button" onClick={this.onChildNodeClicked.bind(this)}>{childNode.title}</span></li>); 
                    }
                });

        return (<ul className={classNames(treeNode.title === null ? "tree collapse in" : "tree collapse")} id={uniqueId}> {childrenTree} </ul>);
    }

    render () {
        return this.buildTree(this.config.treeData);
    }
}

export default Tree;