import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CourseItem from './CourseItem';
import { connect } from "react-redux";
import { getTopCourses } from "../../actions/coursesActions";
import PropTypes from "prop-types";

class TopCourses extends Component {
  constructor(props){
    super(props)
    this.props.getTopCourses()
  }

  render(){
    console.log(this.props.courses)
      return (
          <div className="page-section border-bottom-2">
              <Container className="page__container">
                <Row className="align-items-end mb-16pt mb-md-32pt">
                  <div className="col-md-auto mb-32pt mb-md-0">
                    <div className="page-headline page-headline--title text-center text-md-left p-0">
                      <h2>Top Courses</h2>
                    </div>
                  </div>
                  <div className="col-md text-center text-md-right d-flex justify-content-md-end align-items-center flex-wrap" style={{ whiteSpace: "nowrap" }}>
                    <h5 className="mr-24pt mb-md-0 d-md-inline-block">Popular topics</h5>
                    <a href="library-development.html" className="chip mb-16pt mb-md-0 chip-secondary">Development</a>
                    <a href="library-development.html" className="chip mb-16pt mb-md-0 chip-outline-secondary">Design</a>
                    <a href="library-development.html" className="chip mb-16pt mb-md-0 chip-outline-secondary">Photography</a>
                    <a href="library-development.html" className="chip mb-16pt mb-md-0 chip-outline-secondary d-md-none d-lg-inline-flex">Business</a>
                  </div>
                </Row>
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
                  this.props.courses.length == 0 ?
                  <p className="text-center ml-6">
                    No courses yet.
                  </p> :
                  this.props.courses.map(
                  (item, key) => <CourseItem key={key} SID={`top_course_${key}`} course={item} /> 
                )
                }
                </Row>
                <div className="pt-md-16pt text-center">
                  <a href="library.html" className="btn btn-outline-secondary">Browse Courses</a>
                </div>
              </Container>
              
          </div>
      )
  }
}

TopCourses.propTypes = {
  getTopCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses.response
});

export default connect(
  mapStateToProps,
  { getTopCourses }
)(TopCourses);