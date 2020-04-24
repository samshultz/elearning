import React, { Component } from 'react';
import {
  Button, 
  Card,
  CardBody, 
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row, 
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { userSignup } from "../../actions/userActions";
import PropTypes from "prop-types";

class SignUp extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      last_name: "",
      other_names: "",
      username: "",
      email: "",
      password1: "",
      password2: "",
      error: false
    }

  }
  
  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userSignup(this.state)
  }

  errorStatus = (field_name) => {
    const { response } = this.props.users
    if(response && response.status===400){
      if(response.data[field_name] !== undefined){
        return true
      } else {
        return false
      }
      
    }
  }

  saveLoginKey = (key) => {
    localStorage.setItem('auth-token', key)
  }

  renderError = (field_name) => {
    const { response } = this.props.users
    if(response && response.status===400){
      if(response.data[field_name] !== undefined){

        return <div className="invalid-feedback">{response.data[field_name]}</div>
      }
      
    }
  }

  render(){
    const { response } = this.props.users

    if(response && response.key){
      this.saveLoginKey(response.key)
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="py-64pt bg-gradient-primary">
          <Container className="d-flex flex-column flex-md-row align-items-center text-center text-md-left">
            <img src="/static/courses/images/illustration/student/128/white.svg" className="mr-md-32pt mb-32pt mb-md-0" alt="student" />
            <div className="flex mb-32pt mb-md-0">
              <h1 className="text-white mb-8pt">Sign Up</h1>
              <p className="lead measure-lead text-white-50">Change your future today with over 1.000 professional courses from the top industry leading teachers and professionals.</p>
            </div>
            <Link to="/accounts/login/" className="btn btn-outline-white flex-column">
              Already have an account?
              <span className="btn__secondary-text">Sign in</span>
            </Link>
          </Container>
        </div>
        <div className="bg-white py-32pt py-lg-64pt">
          <Container className="page__container">
            <Col lg="10" className="p-0 mx-auto">
              <Row>
                <Col md="6" className="mb-24pt mb-md-0">
                  <Form onSubmit={this.handleSubmit}>
                    <div className="alert alert-accent" role="alert">
                      <strong>Well done!</strong>
                      You successfully read this important alert message.
                    </div>
                    <FormGroup>
                      <Input type="hidden" name="group" className="form-control" value="Students" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="last_name">Last name:</Label>
                      <Input type="text" name="last_name" placeholder="Last name" onChange={this.handleInputChange} invalid={this.errorStatus("last_name")} required />
                      {this.renderError("last_name")}
                    </FormGroup>
                    <FormGroup>
                      <Label for="other_names">Other names:</Label>
                      <Input type="text" name="other_names" placeholder="Other names" onChange={this.handleInputChange} invalid={this.errorStatus("other_names")} />
                      {this.renderError("other_names")}
                    </FormGroup>
                    <FormGroup>
                      <Label for="username">Username:</Label>
                      <Input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} invalid={this.errorStatus("username")} />
                      {this.renderError("username")}
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Your email:</Label>
                      <Input type="email" placeholder="Email address" name="email" onChange={this.handleInputChange} invalid={this.errorStatus("email")} />
                      {this.renderError("email")}
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-24pt">
                          <Label for="password">Password:</Label>
                          <Input type="password" placeholder="Enter Password..." name="password1" onChange={this.handleInputChange} invalid={this.errorStatus("password1")} />
                          {this.renderError("password1")}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-24pt">
                          <Label for="password">Password(Confirm):</Label>
                          <Input type="password" name="password2" placeholder="Confirm Password" onChange={this.handleInputChange} invalid={this.errorStatus("password2")} />
                          {this.renderError("password2")}
                        </FormGroup>
                      </Col>
                    </Row>
                      <Button size="lg" className="btn-accent">Create account</Button>
                  </Form>
                </Col>
                <Col md="6">
                  <Card className="mb-0">
                    <CardBody>
                      <h5>Summary</h5>
                      <div className="d-flex mb-8pt">
                        <div className="flex"><strong className="text-70">Knowledge</strong></div>
                        <strong>Student</strong>
                      </div>
                      <div className="d-flex mb-16pt pb-16pt border-bottom">
                        <span className="material-icons text-muted mr-8pt">check</span>
                        <span className="text-70">Access to over 1.000 premium courses at cheaper prices. For individuals.</span>
                      </div>
                        
                      <div className="custom-control custom-checkbox">
                        <Input type="checkbox" className="custom-control-input" defaultChecked id="topic-all" />
                        <Label className="custom-control-label">Terms and conditions</Label>
                        <small className="form-text text-muted">By checking here and continuing, I agree to the Tutorio Terms of Use</small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
        <div className="page-separator m-0">
          <div className="page-separator__text">or sign-in with</div>
          <div className="page-separator__bg-top bg-white"></div>
        </div>
        <div className="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
        <Container className="page__container">
            <a href="" className="btn btn-lg btn-secondary btn-block-xs">Facebook</a>
            <a href="" className="btn btn-lg btn-secondary btn-block-xs">Twitter</a>
            <a href="" className="btn btn-lg btn-secondary btn-block-xs">Google+</a>
        </Container>
    </div>
      </>
    );
  }
  
}

SignUp.propTypes = {
  userSignup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { userSignup }
)(SignUp);