import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/home" className="brand-logo left">Unplug'n'Thrive</Link>
                    <ul id='nav-mobile' className="right">
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