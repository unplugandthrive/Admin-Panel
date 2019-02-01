import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleSideMenu } from '../actions/menuActions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.toggleSideMenu();
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <Link to="/home" className="brand-logo right">Unplug and Thrive</Link>
                    <ul id='nav-mobile' className="left">
                        <li><a onClick={this.handleClick}><i className="material-icons">menu</i></a></li>
                        <li><Link to="/home"><i className="material-icons">add</i></Link></li>
                        <li><Link to="/home"><i className="material-icons">search</i></Link></li>
                        <li><Link to="/home"><i className="material-icons">settings</i></Link></li>
                        <li><Link to="/home"><i className="material-icons">help</i></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default connect(null, { toggleSideMenu })(Header);