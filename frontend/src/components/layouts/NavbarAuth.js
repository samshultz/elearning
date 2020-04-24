import React, { Component } from 'react';
import Notification from './Notification'

import axios from 'axios';
import { 
    Nav, 
    NavLink,
    NavItem, 
    UncontrolledDropdown,
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap'

import { Link } from 'react-router-dom'

import { connect } from "react-redux";
import { getUserDetail } from "../../actions/userActions";
import PropTypes from "prop-types";


class NavbarAuth extends Component {
    constructor(props){
      super(props)
      this.userData = null
      this.authToken = localStorage.getItem("auth-token");
      this.user = localStorage.getItem("userData");

      if(this.authToken != null){
        axios.defaults.headers.common['Authorization'] = `Token ${this.authToken}`
      }
      
      if(!this.user){
        this.props.getUserDetail()
      }
    }

    render(){
      const { response } = this.props.users
      if(response){
        this.userData = response
        localStorage.setItem("userData", JSON.stringify(this.userData))
      }else{
        this.userData = JSON.parse(this.user)
      }
        return (
            <Nav className="ml-auto flex-nowrap" navbar>
                <NavItem className="dropdown d-none d-sm-flex ml-16pt">
                    <NavLink className="dropdown-toggle" data-toggle="dropdown">
                        <img width="32" height="32" className="rounded-circle" src="/static/courses/images/people/50/guy-3.jpg" alt="student" />
                    </NavLink>
                    <UncontrolledDropdown inNavbar>
                        <DropdownMenu right>
                        <DropdownItem header>
                            <strong>{ this.userData ? `${this.userData.first_name} ${this.userData.last_name}`: ""}</strong>
                        </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    Dashboard
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/courses/me/manage/">
                                    Courses
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                              <NavLink>
                                {this.userData ? this.userData.groups[0] == "Instructors" ? "Quizzes" : "Quiz results": "" }
                              </NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <strong>Account</strong>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    Edit Account
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    Billing
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink>
                                    Payments
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/accounts/logout/" className="nav-link">
                                    Logout
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <Notification />
            </Nav>
          );
      }
    }

NavbarAuth.propTypes = {
  getUserDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUserDetail }
)(NavbarAuth);