import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {
    render() {
        return (
            <div style={{ height: "85vh" }} className="col s2 grey darken-2">
                <ul id="slide-out" class="side-nav fixed">
                    <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small grey darken-1 left-align">Home</a></Link></li>
                    <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small grey darken-1 left-align">Employees</a></Link></li>
                    <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small grey darken-1 left-align">Customers</a></Link></li>
                    <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small grey darken-1 left-align">Services</a></Link></li>
                    <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small grey darken-1 left-align">Service Orders</a></Link></li>
                    <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small grey darken-1 left-align">Reports</a></Link></li>
                </ul>
            </div>
        )
    }
}