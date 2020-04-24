import React, { Component } from 'react';
import {
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

class CoursesModal extends Component {
    render(){
        return (
            <div className="modal courses-modal" id="courses" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-body">
                  <Row>
                    <Col md="4" sm="6" className="col-i8-plus bg-body pr-0">
                      <div className="py-16pt pl-16pt menu">
                        <Nav className="flex-column">
                          <NavItem>
                            <NavLink href="#" data-toggle="tab" active={true}>
                              Development
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#" data-toggle="tab">
                              Design
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#" data-toggle="tab">
                              Photography
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#" data-toggle="tab">
                              Marketing
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#" data-toggle="tab">
                              Business
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </Col>

                    <Col md="8" sm="6" className="col-i8-plus-auto bg-body tab-content">
                      <div id="courses-development" className="tab-pane show active">
                        <Row className="no-gutters">
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                <h5 className="text-black-100">Courses</h5>
                                <Nav className="flex-column mb-24pt">
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      Web Development
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      JavaScript
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      HTML
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      CSS
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      Wordpress
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      PHP
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink className="px-0" href="#" data-toggle="tab">
                                      iOS Development
                                    </NavLink>
                                  </NavItem>
                                </Nav>
                              </div>
                              <div>
                                <a href="library.html" className="btn btn-block text-center btn-secondary">Library</a>
                              </div>
                            </div>
                          </Col>
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                  <h5 className="text-black-100">Learning Paths</h5>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Angular</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Swift</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">React Native</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">WordPress</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-24pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Development Tools</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                              <div>
                                  <a href="paths.html" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div id="courses-design" className="tab-pane">
                        <Row className="no-gutters">
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                  <h5 className="text-black-100">Courses</h5>
                                  <Nav className="flex-column mb-24pt">

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Illustration</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Design Skills</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Design Techniques</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Page Layout</NavLink>
                                      </NavItem>
                                      <NavItem>
                                          <NavLink className="px-0" href="#">Projects</NavLink>
                                      </NavItem>
                                      <NavItem>
                                          <NavLink className="px-0" href="#">Drawing</NavLink>
                                      </NavItem>
                                      <NavItem>
                                          <NavLink className="px-0" href="#">Typography</NavLink>
                                      </NavItem>

                                  </Nav>
                              </div>
                              <div>
                                  <a href="#" className="btn btn-block text-center btn-secondary">Library</a>
                              </div>
                          </div>
                          </Col>

                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                  <h5 className="text-black-100">Learning Paths</h5>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Angular</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Swift</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">React Native</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">WordPress</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-24pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Development Tools</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                              <div>
                                  <a href="paths.html" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div id="courses-photography" className="tab-pane">
                        <Row className="no-gutters">
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                  <h5 className="text-black-100">Courses</h5>
                                  <Nav className="nav flex-column mb-24pt">

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Cameras</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Raw Processing</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Masking</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Compositing</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Portraits</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Photo Management</NavLink>
                                      </NavItem>

                                      <NavItem>
                                          <NavLink className="px-0" href="#">Lighting</NavLink>
                                      </NavItem>

                                  </Nav>
                              </div>
                              <div>
                                  <a href="library.html" className="btn btn-block text-center btn-secondary">Library</a>
                              </div>
                            </div>
                          </Col>
                          <Col md="6" className="p-0">
                            <div className="col-md-6 p-0">
                              <div className="p-24pt d-flex h-100 flex-column">
                                  <div className="flex">
                                      <h5 className="text-black-100">Learning Paths</h5>
                                      <div className="mb-16pt">
                                          <a href="path.html" className="media text-black-100">
                                              <img src="/static/courses/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded" />
                                              <span className="media-body">
                                                  <span className="card-title d-block mb-0">Angular</span>
                                                  <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="mb-16pt">
                                          <a href="path.html" className="media text-black-100">
                                              <img src="/static/courses/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded" />
                                              <span className="media-body">
                                                  <span className="card-title d-block mb-0">Swift</span>
                                                  <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="mb-16pt">
                                          <a href="path.html" className="media text-black-100">
                                              <img src="/static/courses/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded" />
                                              <span className="media-body">
                                                  <span className="card-title d-block mb-0">React Native</span>
                                                  <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="mb-16pt">
                                          <a href="path.html" className="media text-black-100">
                                              <img src="/static/courses/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded" />
                                              <span className="media-body">
                                                  <span className="card-title d-block mb-0">WordPress</span>
                                                  <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="mb-24pt">
                                          <a href="path.html" className="media text-black-100">
                                              <img src="/static/courses/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded" />
                                              <span className="media-body">
                                                  <span className="card-title d-block mb-0">Development Tools</span>
                                                  <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                              </span>
                                          </a>
                                      </div>
                                  </div>
                                  <div>
                                      <a href="paths.html" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                                  </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div id="courses-marketing" className="tab-pane">
                        <Row className="no-gutters">
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                <h5 className="text-black-100">Courses</h5>
                                <Nav className="flex-column mb-24pt">

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Small Business</NavLink>
                                  </NavItem>

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Marketing</NavLink>
                                  </NavItem>

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Enterprise Marketing</NavLink>
                                  </NavItem>

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Content Marketing</NavLink>
                                  </NavItem>

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Online Marketing</NavLink>
                                  </NavItem>

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Social Media Marketing</NavLink>
                                  </NavItem>

                                  <NavItem>
                                      <NavLink className="px-0" href="#">Advertising</NavLink>
                                  </NavItem>

                                </Nav>
                              </div>
                              <div>
                                  <a href="library.html" className="btn btn-block text-center btn-secondary">Library</a>
                              </div>
                            </div>
                          </Col>
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                  <h5 className="text-black-100">Learning Paths</h5>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Angular</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Swift</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">React Native</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                    <a href="path.html" className="media text-black-100">
                                      <img src="/static/courses/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded" />
                                      <span className="media-body">
                                        <span className="card-title d-block mb-0">WordPress</span>
                                        <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mb-24pt">
                                    <a href="path.html" className="media text-black-100">
                                      <img src="/static/courses/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded" />
                                      <span className="media-body">
                                        <span className="card-title d-block mb-0">Development Tools</span>
                                        <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                      </span>
                                    </a>
                                  </div>
                              </div>
                              <div>
                                <a href="paths.html" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div id="courses-business" className="tab-pane">
                        <Row className="no-gutters">
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                <h5 className="text-black-100">Courses</h5>
                                <Nav className="nav flex-column mb-24pt">

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Business Skills</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Productivity</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Communication</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Leadership</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Management</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Career Development</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="px-0" href="#">Spreadsheets</NavLink>
                                    </NavItem>

                                </Nav>
                              </div>
                              <div>
                                  <a href="library.html" className="btn btn-block text-center btn-secondary">Library</a>
                              </div>
                            </div>
                          </Col>
                          <Col md="6" className="p-0">
                            <div className="p-24pt d-flex h-100 flex-column">
                              <div className="flex">
                                  <h5 className="text-black-100">Learning Paths</h5>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Angular</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Swift</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">React Native</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-16pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">WordPress</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                          </span>
                                      </a>
                                  </div>
                                  <div className="mb-24pt">
                                      <a href="path.html" className="media text-black-100">
                                          <img src="/static/courses/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded" />
                                          <span className="media-body">
                                              <span className="card-title d-block mb-0">Development Tools</span>
                                              <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                              <div>
                                  <a href="paths.html" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <Button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </div>
              </div>
            </div>
          );
    }
  
}

export default CoursesModal;