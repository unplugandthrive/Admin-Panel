import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class EmpHome extends Component {
    render() {
        var width = this.props.sideMenu ? 10 : 12
        return (
            <div className={`col s${width}`}>
                <div className="row">
                    <div className="col s9">
                        <h4>
                            Employee Home
                        </h4>
                    </div>

                    <Link to="/employees/create"><a class="btn push-s9">Create New</a></Link>
                </div>
                <table>
                    <thead>
                        <td>Employee ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td></td>
                    </thead>
                </table>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    sideMenu: state.menu.sideMenuVisibility
})

export default connect(mapStateToProps, {})(EmpHome);
