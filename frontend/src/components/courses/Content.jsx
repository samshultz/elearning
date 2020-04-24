import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Navbar, 
  Nav,
  NavItem, 
  Media,
  UncontrolledTooltip 
} from 'reactstrap';


class Content extends Component {
  render(){
    return (
      <>
        <Navbar color="light" light expand="xs" className="navbar-submenu border-0">
          <Container className="container">
            <Media className="media flex-nowrap">
              <Media className="mr-16pt" left>
                <a href="course.html"><img src="/static/courses/images/paths/angular_64x64.png" width="40" alt="Angular" className="rounded" /></a>
              </Media>
              <Media body>
                <a href="course.html" className="card-title text-body mb-0">Angular Fundamentals</a>
                <p className="lh-1 d-flex align-items-center mb-0">
                  <span className="text-50 small font-weight-bold mr-8pt">Elijah Murray</span>
                  <span className="text-50 small">Software Engineer and Developer</span>
                </p>
              </Media>
            </Media>
          </Container>
        </Navbar>
        <div className="bg-gradient-primary pb-lg-64pt py-32pt">
          <Container className="container">
            
            <div className="js-player embed-responsive embed-responsive-16by9 mb-32pt">
              <div className="player embed-responsive-item">
                <div className="player__content">
                  <div className="player__image" style={{ "--player-image": "/static/courses/images/illustration/player.svg" }}></div>
                  <a href="" className="player__play">
                    <span className="material-icons">play_arrow</span>
                  </a>
                </div>
                <div className="player__embed d-none">
                  <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0" allowfullscreen=""></iframe>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-end mb-16pt">
              <h1 className="text-white flex m-0">Introduction to TypeScript</h1>
              <p className="h1 text-white-50 font-weight-light m-0">50:13</p>
            </div>
            <p className="hero__lead measure-hero-lead text-white-50 mb-24pt">JavaScript is now used to power backends, create hybrid mobile applications, architect cloud solutions, design neural networks and even control robots. Enter TypeScript: a superset of JavaScript for scalable, secure, performant and feature-rich applications.</p>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
              <a href="lesson.html" className="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">Watch trailer <i className="material-icons icon--right">play_circle_outline</i></a>
              <a href="pricing.html" className="btn btn-white">Get started</a>
            </div>
          </Container>
        </div>
        <Navbar color="light"light expand="sm" className="navbar-submenunavbar-list p-0 m-0 align-items-center">
          <Container className="page__container">
            <Nav className="flex align-items-sm-center" navbar>
              <NavItem className="navbar-list__item">
                <Media className="align-items-center">
                  <Media tag="span" className="mr-16pt" left>
                    <img src="/static/courses/images/people/50/guy-6.jpg" width="40" alt="avatar" className="rounded-circle" />
                  </Media>
                  <Media body>
                    <a className="card-title m-0" href="instructor-profile.html">Eddie Bryan</a>
                    <p className="text-50 lh-1 mb-0">Instructor</p>
                  </Media>
                </Media>
              </NavItem>
              <NavItem className="navbar-list__item">
                  <i className="material-icons text-muted icon--left">schedule</i>
                  2h 46m
              </NavItem>
              <NavItem className="navbar-list__item">
                <i className="material-icons text-muted icon--left">assessment</i>
                Beginner
              </NavItem>
              <NavItem className="ml-sm-auto text-sm-center flex-column navbar-list__item">
                <div className="rating rating-24">
                  <div className="rating__item"><i className="material-icons">star</i></div>
                  <div className="rating__item"><i className="material-icons">star</i></div>
                  <div className="rating__item"><i className="material-icons">star</i></div>
                  <div className="rating__item"><i className="material-icons">star</i></div>
                  <div className="rating__item"><i className="material-icons">star_border</i></div>
                </div>
                <p className="lh-1 mb-0"><small className="text-muted">20 ratings</small></p>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>

        <div className="page-section bg-gradient-purple border-top-2">
          <Container className="page__container p-0-xs">
            <Row lg="9" className="mx-auto">
              <Col sm="6" className="text-center d-flex flex-column justify-content-center">
                <h4 className="text-white mb-8pt">Unlock Library</h4>
                <p className="text-white-70 mb-24pt mb-sm-0">Get access to 1.000+ lessons taught by industry experts.</p>
              </Col>
              <Col sm="6" className="d-flex flex-column align-items-center justify-content-center">
                <a href="pricing.html" className="btn btn-outline-white mb-8pt">Watch all courses for $9/mo</a>
                <p className="text-white-70 mb-0">Have an account? <a href="login.html" className="text-white text-underline">Login</a></p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
}

export default Content;