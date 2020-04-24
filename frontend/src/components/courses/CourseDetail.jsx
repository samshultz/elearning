import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col,
  Navbar,
  Nav,
  NavItem,
  Media,
  CardTitle,
  CardGroup,
  Card,
  Progress
} from 'reactstrap';

import { Link } from 'react-router-dom';
import CourseItem from './CourseItem';


class CourseDetail extends Component {
  render(){
    
    return (
      <>
        
        <div className="mdk-box bg-dark mdk-box--bg-gradient-primary js-mdk-box mb-0" data-effects="blend-background">
          <div className="mdk-box__content">
            <div className="hero py-64pt text-center text-sm-left">
              <Container>
                <h1 className="text-white">Angular Fundamentals</h1>
                <p className="lead text-white-50 measure-hero-lead">It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.</p>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                  <a href="lesson.html" className="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">Watch trailer <i className="material-icons icon--right">play_circle_outline</i></a>
                  <a href="pricing.html" className="btn btn-white">Start your free trial</a>
                </div>
              </Container>
            </div>
          </div>
        </div>

        <Navbar color="light" light expand="sm" className="navbar-submenu navbar-list p-0 m-0 align-items-center">
          <Container className="page__container">
            <Nav className="flex align-items-sm-center" navbar>
              <NavItem className="navbar-list__item">
                <Media className="align-items-center">
                  <Media className="mr-16pt" tag="span" left>
                    <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/50/guy-6.jpg`} width="40" alt="avatar" className="rounded-circle" />
                  </Media>
                  <Media body>
                    <CardTitle tag="a" className="m-0" href="instructor-profile.html">Eddie Bryan</CardTitle>
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

        <div className="page-section border-bottom-2">
          <Container className="page__container">

            <h4>Table of Contents</h4>
            <CardGroup className="card-group--lg-up mb-0">
              <Card className="col-lg-7 p-0">
                <ul className="accordion accordion--boxed js-accordion list-group-flush" id="course-toc">
                  <li className="accordion__item open">
                    <a className="accordion__toggle" data-toggle="collapse" data-parent="#course-toc" href="#course-toc-1">
                      <span className="flex">Course Overview</span>
                      <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                    </a>
                    <div className="accordion__menu">
                      <ul className="list-unstyled collapse show" id="course-toc-1">
                        <li className="accordion__menu-link active">
                          <span className="material-icons icon-16pt icon--left text-primary">play_circle_outline</span>
                          <Link className="flex" to="/courses/1/sections/1/contents/">Watch Trailer</Link>
                          <span className="text-muted">1m 10s</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="accordion__item open">
                    <a className="accordion__toggle" data-toggle="collapse" data-parent="#course-toc" href="#course-toc-2">
                      <span className="flex">Getting Started with Angular</span>
                      <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                    </a>
                    <div className="accordion__menu">
                      <ul className="list-unstyled collapse show" id="course-toc-2">
                        <li className="accordion__menu-link">
                          <span className="material-icons icon-16pt icon--left text-muted">lock</span>
                          <a className="flex" href="lesson.html">Introduction</a>
                          <span className="text-muted">8m 42s</span>
                        </li>
                        <li className="accordion__menu-link">
                          <span className="material-icons icon-16pt icon--left text-muted">lock</span>
                          <a className="flex" href="lesson.html">Introduction to TypeScript</a>
                          <span className="text-muted">50m 13s</span>
                        </li>
                        <li className="accordion__menu-link">
                          <span className="material-icons icon-16pt icon--left text-muted">lock</span>
                          <a className="flex" href="lesson.html">Comparing Angular to AngularJS</a>
                          <span className="text-muted">12m 10s</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="accordion__item">
                    <a className="accordion__toggle" data-toggle="collapse" data-parent="#course-toc" href="#course-toc-3">
                      <span className="flex">Creating and Communicating Between Angular Components</span>
                      <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                    </a>
                    <div className="accordion__menu">
                      <ul className="list-unstyled collapse" id="course-toc-3">
                        <li className="accordion__menu-link">
                          <span className="material-icons icon-16pt icon--left text-muted">lock</span>
                          <a className="flex" href="lesson.html">Angular Components</a>
                          <span className="text-muted">04:23</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="accordion__item">
                    <a className="accordion__toggle" data-toggle="collapse" data-parent="#course-toc" href="#course-toc-4">
                      <span className="flex">Exploring the Angular Template Syntax</span>
                      <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                    </a>
                    <div className="accordion__menu">
                      <ul className="list-unstyled collapse" id="course-toc-4">
                        <li className="accordion__menu-link">
                          <span className="material-icons icon-16pt icon--left text-muted">lock</span>
                          <a className="flex" href="lesson.html">Template Syntax</a>
                          <span className="text-muted">04:23</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </Card>
              <Card className="col-lg-5 p-0 mb-0 justify-content-center border-left-lg">
                <Card className="flex-0 text-center" body>
                  <div>
                    <i className="material-icons text-muted">timer</i>
                  </div>
                  <h4 className="my-8pt"><strong>Unlock All Videos</strong></h4>
                  <p className="text-70 mb-24pt">Get access to all videos in the library</p>
                  <a href="pricing.html" className="btn btn-outline-primary mb-8pt">Get started</a>
                  <p>Have an account? <a href="login.html">Login</a></p>
                </Card>
              </Card>
            </CardGroup>
          </Container>
        </div>

        <div className="bg-white">
          <div className="page-separator-mask page-section pb-0 js-read-more">
            <Container className="page__container">
              <Row>
                <Col md="7">
                  <h4>About this course</h4>
                  <p className="text-70">This course will teach you the fundamentals o*f working with Angular 2. You *will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.</p>
                  <p>This course will teach you the fundamentals o*f working with Angular 2. You *will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.</p>
                </Col>
                <Col md="5">
                  <h4>What you’ll learn</h4>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Fundamentals of working with Angular</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Create complete Angular applications</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Working with the Angular CLI</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Understanding Dependency Injection</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Testing with Angular</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Testing with Angular</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="material-icons text-50 mr-8pt">check</span>
                      <span className="text-70">Testing with Angular</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <div className="page-separator-mask__content">
              <div className="page-separator-mask__top"></div>
              <div className="page-separator-mask__bottom"></div>
              <div className="page-separator">
                <a href="#" className="page-separator__text link-text">read more <i className="material-icons">keyboard_arrow_down</i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section bg-white border-bottom-2">
          <div className="container">
            <div className="row">
              <div className="col-md-7 mb-24pt mb-md-0">
                <h4>About the author</h4>
                <p className="text-70 mb-24pt">Eddie Bryan is a software developer at LearnD*ash. With more than 20 years o*f software development experience, he has gained a passion for Agile software development -- especially Lean.</p>
                <h4>More from the author</h4>
                <div className="list-group list-group-flush">
                  <div className="list-group-item px-0">
                    <a href="" className="d-block mb-4pt">Angular Best Practices</a>
                    <p className="lh-1 mb-0">
                      <small className="text-muted mr-8pt">6h 40m</small>
                      <small className="text-muted mr-8pt">13,876 Views</small>
                      <small className="text-muted">13 May 2018</small>
                    </p>
                  </div>
                  <div className="list-group-item px-0">
                    <a href="" className="d-block mb-4pt">Unit Testing in Angular</a>
                    <p className="lh-1 mb-0">
                      <small className="text-muted mr-8pt">6h 40m</small>
                      <small className="text-muted mr-8pt">13,876 Views</small>
                      <small className="text-muted">13 May 2018</small>
                    </p>
                  </div>
                  <div className="list-group-item px-0">
                    <a href="" className="d-block mb-4pt">Migrating Applications from AngularJS to Angular</a>
                    <p className="lh-1 mb-0">
                      <small className="text-muted mr-8pt">6h 40m</small>
                      <small className="text-muted mr-8pt">13,876 Views</small>
                      <small className="text-muted">13 May 2018</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 border-left-md pt-sm-32pt pt-md-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-center">
                  <p className="mb-16pt">
                    <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/110/guy-6.jpg`} alt="guy-6" className="rounded-circle" width="64" />
                  </p>
                  <h4 className="m-0">Eddie Bryan</h4>
                  <p className="lh-1">
                    <small className="text-muted">Angular, Web Development</small>
                  </p>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                    <a href="instructor-profile.html" className="btn btn-outline-primary mb-16pt mb-sm-0 mr-sm-16pt">Follow</a>
                    <a href="instructor-profile.html" className="btn btn-outline-secondary">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <Container>
            <div className="page-headline text-center">
              <h2>Feedback</h2>
              <p className="lead text-70 measure-lead mx-auto">What other students turned professionals have to say about us after learning with us and reaching their goals.</p>
            </div>

            <div className="position-relative carousel-card">
              <Row className="d-block js-mdk-carousel" id="carousel-feedback">
                <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-feedback" role="button" data-slide="next">
                  <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                  <span className="sr-only">Next</span>
                </a>
                <div className="mdk-carousel__content">
                  <Col xs="12" md="6">
                    <Card className="card--elevated" body>
                      <blockquote className="mb-0">
                        <p className="text-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio reiciendis iusto id, doloribus optio soluta laborum nobis dolor tempore velit porro maiores eveniet voluptas officia ipsa magnam aliquam. Perferendis?</p>

                        <Media>
                          <Media left>
                            <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/110/guy-1.jpg`} width="40" alt="avatar" className="rounded-circle" />
                          </Media>
                          <Media body middle>
                            <p className="mb-0"><a href="" className="text-body"><strong>Umberto Kass</strong></a></p>
                            <div className="rating">
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                          </Media>
                        </Media>
                      </blockquote>
                    </Card>
                  </Col>

                  <Col xs="12" md="6">
                    <Card body className="card--elevated">
                      <blockquote className="mb-0">
                        <p className="text-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio reiciendis iusto id, doloribus optio soluta laborum nobis dolor tempore velit porro maiores eveniet voluptas officia ipsa magnam aliquam. Perferendis?</p>
                          <Media>
                            <Media left>
                              <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/110/guy-2.jpg`} width="40" alt="avatar" className="rounded-circle" />
                            </Media>
                            <Media body middle>
                              <p className="mb-0"><a href="" className="text-body"><strong>Umberto Kass</strong></a></p>
                              <div className="rating">
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                              </div>
                            </Media>
                          </Media>
                      </blockquote>
                    </Card>
                  </Col>

                </div>
              </Row>
            </div>
          </Container>
        </div>

        <div className="bg-white">
          <div className="pt-32pt pt-lg-64pt pb-16pt pb-lg-32pt">
            <Container className="page__container">
              <h4>Student Feedback</h4>
              <Row className="row">
                <Col md="3" className="mb-32pt mb-md-0">
                  <div className="display-1">4.7</div>
                  <div className="rating rating-32">
                    <span className="rating__item"><span className="material-icons">star</span></span>
                    <span className="rating__item"><span className="material-icons">star</span></span>
                    <span className="rating__item"><span className="material-icons">star</span></span>
                    <span className="rating__item"><span className="material-icons">star</span></span>
                    <span className="rating__item"><span className="material-icons">star_border</span></span>
                  </div>
                  <p className="text-muted mb-0">20 ratings</p>
                </Col>
                <Col md="9">

                  <Row className="align-items-center mb-8pt">
                    <Col md="9" sm="6">
                      <Progress className="progress" color="secondary" value="75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" /> 
                    </Col>
                    <Col md="3" sm="6" className="d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                      </div>
                        <span className="text-muted">75%</span>
                        <span className="material-icons icon-16pt ml-8pt">close</span>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-8pt">
                    <Col md="9" sm="6">
                      <Progress className="progress" color="secondary" value="16" role="progressbar" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100" />
                    </Col>
                    <Col md="3" sm="6" className="d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                      </div>
                      <p className="text-muted mb-0">16%</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-8pt">
                    <Col md="9" sm="6">
                      <Progress className="progress" color="secondary" value="12" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" />
                    </Col>
                    <Col md="3" sm="6" className="d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                      </div>
                      <p className="text-muted mb-0">12%</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-8pt">
                    <Col md="9" sm="6">
                      <Progress className="progress" color="secondary" value="9" role="progressbar" aria-valuenow="9" aria-valuemin="0" aria-valuemax="100" />
                    </Col>
                    <Col md="3" sm="6" className="d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                      </div>
                      <p className="text-muted mb-0">9%</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-8pt">
                    <div className="col-md-9 col-sm-6">
                      <Progress className="progress" color="secondary" value="0" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                    <div className="col-md-3 col-sm-6 d-none d-sm-flex align-items-center">
                      <div className="rating rating-24 mr-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                      </div>
                      <p className="text-muted mb-0">0%</p>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="pt-16pt pt-lg-32pt">
            <div className="page-separator-mask js-read-more">
              <Container className="page__container">
                <Row className="mb-16pt pb-16pt border-bottom">
                  <Col md="3" className="mb-16pt mb-md-0">
                    <div className="d-flex">
                      <a href="student-profile.html" className="avatar avatar-sm mr-16pt">
                        <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/110/guy-1.jpg`} alt="avatar" className="avatar-img rounded-circle" />
                      </a>
                      <div className="flex">
                        <p className="text-muted m-0">2 days ago</p>
                        <p className="mb-0"><a href="student-profile.html" className="text-body">Laza Bogdan</a></p>
                      </div>
                    </div>
                  </Col>
                    <Col md="9">
                      <div className="rating mb-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                      </div>
                      <p className="text-70 mb-0">This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!</p>
                    </Col>
                </Row>

                <Row className="mb-16pt pb-16pt border-bottom page-separator-mask__item">
                    <Col md="3" className="mb-16pt mb-md-0">
                      <div className="d-flex">
                        <a href="student-profile.html" className="avatar avatar-sm mr-16pt">
                          <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/110/guy-1.jpg`} alt="avatar" className="avatar-img rounded-circle" />
                        </a>
                        <div className="flex">
                          <p className="text-muted m-0">2 days ago</p>
                          <p className="mb-0"><a href="student-profile.html" className="text-body">Laza Bogdan</a></p>
                        </div>
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="rating mb-8pt">
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star</span></span>
                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                      </div>
                      <p className="text-70 mb-0">This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!</p>
                    </Col>
                </Row>

                <Row className="mb-16pt pb-16pt border-bottom">
                  <Col md="3" className="mb-16pt mb-md-0">
                    <div className="d-flex">
                      <a href="student-profile.html" className="avatar avatar-sm mr-16pt">
                        <img src={`${process.env.PUBLIC_URL}/static/courses/images/people/110/guy-1.jpg`} alt="avatar" className="avatar-img rounded-circle" />
                      </a>
                      <div className="flex">
                        <p className="text-muted m-0">2 days ago</p>
                        <p className="mb-0"><a href="student-profile.html" className="text-body">Laza Bogdan</a></p>
                      </div>
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="rating mb-8pt">
                      <span className="rating__item"><span className="material-icons">star</span></span>
                      <span className="rating__item"><span className="material-icons">star</span></span>
                      <span className="rating__item"><span className="material-icons">star</span></span>
                      <span className="rating__item"><span className="material-icons">star</span></span>
                      <span className="rating__item"><span className="material-icons">star_border</span></span>
                    </div>
                    <p className="text-70 mb-0">This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!</p>
                  </Col>
                </Row>
              </Container>
              <div className="page-separator-mask__content">
                <div className="page-separator-mask__top"></div>
                <div className="page-separator-mask__bottom bg-body"></div>
                <div className="page-separator">
                    <a href="#" className="page-separator__text link-text">read more <i className="material-icons">keyboard_arrow_down</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section">
          <Container className="page__container">
            <div className="page-heading">
              <h4>Top Development Courses</h4>
              <a href="library-development.html" className="ml-sm-auto text-underline">See Development Courses</a>
            </div>

            <div className="position-relative carousel-card">
              <Row className="js-mdk-carousel d-block" id="carousel-courses1">
                <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-courses1" role="button" data-slide="next">
                  <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                  <span className="sr-only">Next</span>
                </a>

                <div className="mdk-carousel__content">
                  <CourseItem SID="tcourse_1" />
                  <CourseItem SID="tcourse_2" />
                  <CourseItem SID="tcourse_3" />
                  <CourseItem SID="tcourse_4" />
                </div>
              </Row>
            </div>


          </Container>
        </div>

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
    )
  }
}
export default CourseDetail;