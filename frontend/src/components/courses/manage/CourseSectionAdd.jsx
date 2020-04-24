import React, { Component } from 'react';
import {
    Row,
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

import { withRouter, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { 
    createNewSection 
} from "../../../actions/coursesActions";
import PropTypes from "prop-types";

class CourseSectionAdd extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      title: "",
      description: ""
    }

  }

  

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { course_id } = this.props.match.params
    this.props.createNewSection(this.state, course_id)
  }


  render(){
    console.log(this.props.newSection)
    if (this.props.newSection && this.props.newSection.id){
        return <Redirect to={`/courses/me/manage/course/${this.props.match.params.course_id}/edit/`} />
    }
      return (
        <>
          <div className="mt-5 bg-gradient-primary border-bottom-white py-32pt">
          <Container className="d-flex flex-column flex-md-row align-items-center text-center text-md-left">
            <img src="/static/courses/images/illustration/teacher/128/white.svg" width="104" className="mr-md-32pt mb-32pt mb-md-0" alt="instructor" />
            <div className="flex mb-32pt mb-md-0">
              <h2 className="text-white mb-0">Add new Section</h2>
              <p className="lead text-white-50 d-flex align-items-center">Section create <span className="ml-16pt d-flex align-items-center"><i className="material-icons icon-16pt mr-4pt">opacity</i> 2,300 IQ</span></p>
            </div>
            <a href="student-edit-account.html" className="btn btn-outline-white">Edit account</a>
          </Container>
        </div>

          <div className={`card card-elevated d-flex justify-content-center`}>
            
          <div style={{ height: "300px", overflowY: "scroll" }} className="card-body">
            
              <Form id="form-text" onSubmit={this.onSubmit}>
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Title:</Label>
                      <Input onChange={this.handleChange} type="text" name="title" placeholder="Enter Section name" required />
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Description:</Label>
                      <Input type="textarea" placeholder="Enter section description" name="description" onChange={this.handleChange} />
                    </Col>
                  </Row>
                </FormGroup>
                <Button type="submit" className="btn btn-success">
                  Add Content
                </Button>
              </Form>
            </div>
          
          </div>
        </>
        );
  }
}

CourseSectionAdd.propTypes = {
    createNewSection: PropTypes.func.isRequired,
    newSection: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  newSection: state.courses.NewSection
});

export default withRouter(connect(
  mapStateToProps,
  { createNewSection }
)(CourseSectionAdd));