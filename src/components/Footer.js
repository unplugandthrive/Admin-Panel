import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            
            <footer style={{bottom:"0", width:"100vw", position:'fixed'}}  className="page-footer sticky blue">
                
                <div className="footer-copyright">
                    <div className="container">
                        &copy; Stuff
                    </div>
                </div>
            </footer>
        )
    }
}