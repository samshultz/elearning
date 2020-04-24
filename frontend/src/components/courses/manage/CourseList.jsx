import React, { Component } from 'react';

import { 
  Container, 
  Row, 
  Navbar, 
  Nav, 
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledCollapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
import CourseItem from "../CourseItem";
import { connect } from "react-redux";
import { getInstructorCreatedCourses } from "../../../actions/coursesActions";
import PropTypes from "prop-types";


class CourseList extends Component {
  state = {
    isOpen: false
  }


  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen})
  }

  componentDidMount() {
    this.props.getInstructorCreatedCourses()
  }

  render(){
    return (
      <>
        <div className="mdk-header-layout__content page-content ">
          <div className="bg-gradient-primary border-bottom-white py-32pt">
            <Container className="d-flex flex-column flex-md-row align-items-center text-center text-md-left">
              <img src="/static/courses/images/illustration/teacher/128/white.svg" width="104" className="mr-md-32pt mb-32pt mb-md-0" alt="instructor" />
              <div className="flex mb-32pt mb-md-0">
                <h2 className="text-white mb-0">Name of Instructor</h2>
                <p className="lead text-white-50 d-flex align-items-center">Instructor <span className="ml-16pt d-flex align-items-center"><i className="material-icons icon-16pt mr-4pt">opacity</i> 2,300 IQ</span></p>
              </div>
              <a href="student-edit-account.html" className="btn btn-outline-white">Edit account</a>
            </Container>
          </div>
          <Navbar expand="sm" className="navbar-dark-white bg-gradient-primary p-sm-0 ">
            <Container className="page__container">
              <NavbarToggler className="ml-n16pt" type="button" data-toggle="collapse" id="navbar-submenu2-toggler" data-target="#navbar-submenu2">
                <span className="material-icons">people_outline</span>
              </NavbarToggler>
              <UncontrolledCollapse toggler="#navbar-submenu2-toggler" id="navbar-submenu2" navbar>
                <div className="navbar-collapse__content pb-16pt pb-sm-0">
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="instructor-dashboard.html">
                        Dashboard
                      </NavLink>
                    </NavItem>
                      <Dropdown isOpen={this.state.isOpen} toggle={this.toggleDropdown} nav={true} inNavbar={true} className="nav-item active">
                        <DropdownToggle className="nav-link" href="#" data-toggle="dropdown" nav={true} caret>Manage</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem className="active" href="instructor-courses.html">Courses</DropdownItem>
                          <DropdownItem className="dropdown-item" href="instructor-quizzes.html">Quizzes</DropdownItem>
                          <DropdownItem className="dropdown-item" href="instructor-edit-quiz.html">Edit Quiz</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                  </Nav>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="instructor-profile.html">
                          Profile
                        </NavLink>
                      </NavItem>
                    </Nav>
                </div>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <Container className="page__container page-section">
         
              <div className="mb-heading d-flex align-items-center">
                  <h4 className="flex m-0">Manage Courses</h4>
                  <a href="" className="btn btn-accent">Add Course</a>
              </div>
            <Row>
              { this.props.courses === undefined ? 
                <div className="card mx-auto">
                  <div className="card-body">
                    <p className="text-70 m-0">Loading Content ...</p>
                  </div>
                  <div className="card-body p-24pt is-loading is-loading-lg">
                    Loading content
                  </div>
                </div> : 
                this.props.courses.length === 0 ? 
                <p className="text-center ml-6">
                  You haven't created any courses yet.
                </p> : 
                this.props.courses.map(
                  (item, key) => <CourseItem key={key} SID={`courseItem_${key}`} course={item} /> 
                ) }
              
              
            </Row>
          {/*{% include "pagination.html" with page_obj=page_obj %}*/}  
          </Container>
        
    </div>
      </>
    );
  }
  
}

CourseList.propTypes = {
  getInstructorCreatedCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses.instructorCourseList
});

export default connect(
  mapStateToProps,
  { getInstructorCreatedCourses }
)(CourseList);