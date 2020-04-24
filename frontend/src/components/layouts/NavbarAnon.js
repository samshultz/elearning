import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


class NavbarAnon extends Component {
    render(){
        return (
          <Nav className="ml-auto flex-nowrap" style={{ whiteSpace: "nowrap" }} navbar>
            <NavItem className="ml-16pt">
              <Link to="/accounts/login/" className="nav-link">
                <i className="material-icons">lock_open</i>
                <span className="sr-only">Login</span>
              </Link>
            </NavItem>
            <NavItem className="d-none d-sm-flex">
              <a href="#" className="btn btn-accent">
                Get started
              </a>
            </NavItem>
          </Nav>
          );
    }
  
}

export default NavbarAnon;