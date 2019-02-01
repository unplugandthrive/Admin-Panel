import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BlankLine extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const retLines = [];
        for(var i = 0; i < this.props.qty; i ++) {
            retLines.unshift(<div key={i} className="row"><div className="col s12"></div></div>)
        }
        return(retLines)
    }
}

BlankLine.propTypes = {
    qty:PropTypes.number.isRequired
}