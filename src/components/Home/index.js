import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        var width = this.props.sideMenu ? 10 : 12;

        return (
            <div className={`section container col s${width}`}>
                <h2>Welcome {this.props.user}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user:state.login.userName,
    sideMenu:state.menu.sideMenuVisibility
});


export default connect(mapStateToProps, {})(Home);