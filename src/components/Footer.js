import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            
            <footer style={{bottom:"0", width:"100vw", position:'absolute'}} class="page-footer blue">
                
                <div class="footer-copyright">
                    <div class="container">
                        &copy; Stuff
                    </div>
                </div>
            </footer>
        )
    }
}