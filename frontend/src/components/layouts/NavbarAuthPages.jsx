import React, { Component } from 'react';
import { 
  Navbar, 
  NavbarBrand, 
  Nav,
  NavItem, 
  NavLink,
  NavbarToggler, 
  Container 
} from 'reactstrap';

import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';


class NavbarAuthPages extends Component {

    openSidebar = () => {
        let el = document.getElementById("default-drawer")
        el.dataset.opened = "";
    }

  render(){
    return (
      <>
        <div id="header" className="mdk-header bg-dark js-mdk-header mb-0" data-effects="waterfall blend-background" data-fixed data-condenses>
          <div className="mdk-header__content">

            <Navbar color="dark" dark expand="sm" data-primary className="bg-dark p-0" id="default-navbar">
              <Container>
                <Link to="/" className="navbar-brand">
                  <img className="navbar-brand-icon" src="/static/courses/images/logo/white-100@2x.png" width="30" alt="Knowdemy" />
                  <span className="d-none d-md-block">Knowdemy</span>
                </Link>
                <Nav className="ml-auto d-none d-sm-flex" navbar>
                  <NavItem active={this.props.location.pathname.split("/").some(el => el==="signup")}>
                    <Link className="nav-link" to="/accounts/signup/">Signup</Link>
                  </NavItem>
                  <NavItem active={this.props.location.pathname.split("/").some(el => el==="login")}>
                    <Link className="nav-link" to="/accounts/login/">Login</Link>
                  </NavItem>
                </Nav>
                <NavbarToggler className="navbar-toggler-right d-block d-md-none" type="button" data-toggle="sidebar" onClick={this.openSidebar}>
                  <span className="navbar-toggler-icon"></span>
                </NavbarToggler>
              </Container>
            </Navbar>
          </div>
        </div>

      </>
    );
  }
  
}

export default withRouter(NavbarAuthPages);