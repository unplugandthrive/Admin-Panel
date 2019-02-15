import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchEmployees } from '../../../actions/employeeActions';

class EmpHome extends Component {
    componentWillMount() {
        this.props.fetchEmployees();
    }
    componentWillReceiveProps(nextProp){
        console.log(nextProp)
    }

    render() {
        console.log(this.props)
        var width = this.props.sideMenu ? 10 : 12

        const postItems = !this.props.employees ? null : this.props.employees.map(emp => (
            <tr key={emp.key}>
                <td>{emp.employee_id}</td>
                <td>{emp.first_name}</td>
                <td>{emp.last_name}</td>
                <td><a><i className="material-icons">edit</i></a></td>
            </tr>
        ));
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
                <table className="white">
                    <thead>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </thead>
                    {!postItems && <p>waiting</p>}
                    {postItems && postItems}
                </table>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    sideMenu: state.menu.sideMenuVisibility,
    employees: state.employee.employees
})

export default connect(mapStateToProps, { fetchEmployees })(EmpHome);
