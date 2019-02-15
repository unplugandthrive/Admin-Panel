import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createEmployee } from '../../../actions/employeeActions'

class EmpCreationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            saddr: '',
            postc: '',
            prvnc: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {  
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("Submiting Form State: \n" + this.state);
    
    }
    render() {
        var width = this.props.sideMenu ? 10 : 12;

        return (
            <div className={`section container col s${width}`}>
                <h2>Create Employee</h2>

                <div className='row'>
                    <div className="container col s10 push-s1 white">
                        <form action="">
                            <div className="input_field col s5 push-s1">
                                <input
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    name="fname"
                                    type="text"
                                    className="validate"
                                    required
                                />
                                <span 
                                    className="helper-text" 
                                    data-error="" 
                                    data-success="">
                                    Ex. John
                                </span>
                            </div>
                            <div className="input_field col s5 push-s1">
                                <input
                                    value={this.state.lname}
                                    onChange={this.handleChange}
                                    placeholder="Last Name" 
                                    name="lname" 
                                    type="text" 
                                    className="validate"
                                    required
                                />
                                <span 
                                    className="helper-text" 
                                    data-error="" 
                                    data-success="">
                                    Ex. Doe
                                </span>
                            </div>
                            <div className="input_field col s5 push-s1">
                                <input 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email" 
                                    name="email" 
                                    type="email" 
                                    className="validate"
                                    required
                                />
                                <span 
                                    className="helper-text" 
                                    data-error="Invalid Email" 
                                    data-success="">
                                    Ex. johndoe@example.com
                                </span>
                            </div>
                            <div className="input_field col s5 push-s1">
                                <input 
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    placeholder="Phone" 
                                    name="phone"
                                    type="tel"
                                    pattern="^\(?[2-9][0-9]{2}\)?-?\s?[2-9][0-9]{2}-?\s?[0-9]{4}$"
                                    className="validate"
                                    required
                                />
                                <span 
                                    className="helper-text" 
                                    data-error="Invalid Phone Number" 
                                    data-success="">
                                    Ex. 123-456-7890
                                </span>
                            </div>
                            <div className="input_field col s10 push-s1">
                                <input 
                                    value={this.state.saddr}
                                    onChange={this.handleChange}
                                    placeholder="Street Address" 
                                    name="saddr" 
                                    type="text" 
                                    className="validate"
                                    required
                                />
                            </div>
                            <div className="input_field col s5 push-s1">
                                <input
                                    value={this.state.postc}
                                    onChange={this.handleChange}
                                    placeholder="Postal Code" 
                                    name="postc" 
                                    type="text" 
                                    pattern="^[a-zA-Z][0-9][a-zA-Z]\s[0-9][a-zA-Z][0-9]$"
                                    className="validate"
                                    required
                                />
                                <span 
                                    className="helper-text" 
                                    data-error="" 
                                    data-success="">
                                    Ex. A1A 2B2
                                </span>
                            </div>
                            <div className="input_field col s5 push-s1">
                                <input
                                    value={this.state.prvnc}
                                    onChange={this.handleChange}
                                    placeholder="Province" 
                                    name="prvnc" 
                                    type="text" 
                                    className="validate"
                                    required
                                />
                                <span 
                                    className="helper-text" 
                                    data-error="" 
                                    data-success="">
                                    Ex. BC
                                </span>
                            </div>
                            <div className="input_field col s5 push-s9">
                                <button type='submit' className={'btn'} onPress={this.handleSubmit}>Submit</button>
                            </div>
                            <div className="row"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sideMenu: state.menu.sideMenuVisibility
});

export default connect(mapStateToProps, { createEmployee })(EmpCreationForm);