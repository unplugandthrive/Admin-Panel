import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SideMenu extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.visibility) {
            return (
                <div style={{ height: "85vh" }} className={`section container col s2 teal darken-4`}>
                    <ul id="slide-out" class="side-nav">
                        <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small green darken-1 left-align">Home</a></Link></li>
                        <li><Link to="/employees/create"><a class="col s12 waves-effect waves-light btn-small teal darken-1 left-align">Employees</a></Link></li>
                        <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small teal darken-1 left-align">Customers</a></Link></li>
                        <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small teal darken-1 left-align">Services</a></Link></li>
                        <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small teal darken-1 left-align">Service Orders</a></Link></li>
                        <li><Link to="/home"><a class="col s12 waves-effect waves-light btn-small teal darken-1 left-align">Reports</a></Link></li>
                    </ul>
                </div>
            )
        }

        return(<div></div>);
    }
}

const mapStateToProps = (state) => ({
    visibility:state.menu.sideMenuVisibility
});

export default connect(mapStateToProps, {})(SideMenu);