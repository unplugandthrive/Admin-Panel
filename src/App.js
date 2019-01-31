import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';



import MainPage from './components/MainPage'

export default class App extends Component {
    render(){
        if(true){}
        return(
            <Provider store={store}>
                <Router>
                    <MainPage />
                </Router>
            </Provider>
        )
    }
}

