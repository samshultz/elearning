import React, { Component } from 'react';

import { 
    Navbar,
    NavbarBrand, 
    Button, 
    Input, 
    Form 
} from 'reactstrap';

// import NavbarAuth from './NavbarAuth'
import NavbarAnon from './NavbarAnon'
import NavbarAuth from './NavbarAuth'
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
      isAuthenticated: false
    }

    openSidebar = () => {
        let el = document.getElementById("default-drawer")
        el.dataset.opened = "";
    }

    componentDidMount(){
      let authToken = localStorage.getItem('auth-token')
      if(authToken != null){
        this.setState({ isAuthenticated: true })
      } 
      
    }
    render(){
        return (
          <div id="header" className="mdk-header bg-dark js-mdk-header mb-0" data-effects="waterfall blend-background" data-fixed data-condenses>
            <div className="mdk-header__content">
              <Navbar expand="sm" className="navbar-dark bg-dark pr-0 pr-md-16pt" id="default-navbar" data-primary>
>
                <Button className="navbar-toggler navbar-toggler-right d-block d-md-none" type="button" data-toggle="sidebar" onClick={this.openSidebar}>
                  <span className="navbar-toggler-icon"></span>
                </Button>
                <Link to="/" className="navbar-brand">
                  <img className="navbar-brand-icon mr-0 mr-md-8pt" src="/static/courses/images/logo/white-100@2x.png" width="30" alt="Tutorio" />
                  <span className="d-none d-md-block">Knowdemy</span>
                </Link>
                <Button className="btn btn-black mr-16pt" 
                        data-toggle="modal" 
                        data-target="#courses">Courses 
                        <i className="material-icons">arrow_drop_down</i>
                </Button>

                <Form className="search-form search-form--black search-form-courses d-none d-md-flex" action="library-filters.html">
                  <Input type="text" className="form-control" placeholder="What would you like to learn?" />
                  <Button className="btn" type="submit" role="button"><i className="material-icons">search</i></Button>
                </Form>
                {this.state.isAuthenticated ? <NavbarAuth /> : <NavbarAnon /> }
                
              </Navbar>
            </div>
          </div>
          );
    }
}

export default Header;