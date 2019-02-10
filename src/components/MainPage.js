import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import Home from './Home';

// Employee Pages
import EmpHome from './employee/EmpHome';
import EmpCreationForm from './employee/EmpCreationForm';

import Header from './Header';
import SideMenu from './SideMenu'
import Footer from './Footer'

class MainPage extends Component {
    render() {

        if (this.props.login_status) {
            return (
                <div>
                    <Header />
                    <main>
                        <div className="row">
                            <SideMenu />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                {/* Employee Routes */}
                                <Route exact path='/employees' component={EmpHome}></Route>
                                <Route path="/employees/create" component={EmpCreationForm} />
                            </Switch>
                        </div>
                    </main>
                    <Footer />
                </div>
            )
        }

        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

MainPage.propTypes = {
    login_status:PropTypes.bool.isRequired,
    userName:PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    login_status: state.login.login_status,
    userName: state.login.userName
});

export default withRouter(connect(mapStateToProps, {})(MainPage));