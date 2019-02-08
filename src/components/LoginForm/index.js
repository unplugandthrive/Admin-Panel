import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import BlankLine from './BlankLine';

import { loginUser } from '../../actions/loginActions';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            uname:"",
            pword:"",
            loggedIn:false
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('running submit')
        this.props.loginUser({
            user:this.state.uname,
            pass:this.state.pword
        })
    }
    render() {
        if (this.state.loggedIn) {
            console.log('redirecting');
            return <Redirect to='/home' />
        }
        console.log('state');
        return (
            <div className="container col s6">
                <BlankLine qty={10}/>
                <div className="row">
                    <div className="col s4 push-s4">
                        <div className="z-depth-1 blue lighten-5 row">
                            <form onSubmit={this.handleSubmit} className="col s12">
                                <div className="row">
                                    <div className="col s12"></div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input onChange={this.onChange} type="text" placeholder="User Name" name="uname" className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input onChange={this.onChange} type="password" placeholder="Password" name="pword" className="validate" />
                                    </div>
                                </div>
                                <br />
                                <center>
                                    <div className="row">
                                        <button type='submit' className="col s6 push-s3 btn btn-large waves-effect indigo">Login</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LoginForm.propTypes = {
    loginUser:PropTypes.func.isRequired
}



export default connect(null, { loginUser})(LoginForm);