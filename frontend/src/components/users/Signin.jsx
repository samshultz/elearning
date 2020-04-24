import React, { Component } from 'react';
import {
  Button,  
  Container,
  Form,
  FormGroup,
  Input,
  Label 
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { userSignin } from "../../actions/userActions";
import PropTypes from "prop-types";
import FacebookLogin from 'react-facebook-login';


class SignIn extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.openSidebar = this.openSidebar.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
  }
  
  responseFacebook = (response) => {
    console.log(response);
  }

  openSidebar = () => {
      let el = document.getElementById("default-drawer")
      el.dataset.opened = "";
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.userSignin(this.state)    
  }

  saveLoginKey = (key) => {
    localStorage.setItem('auth-token', key)
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

  renderError = (field_name = null) => {
    const { response } = this.props.users
    if(response && response.status===400){
      if(field_name === null){
        return <div className="alert alert-accent" role="alert">{response.data.non_field_errors}</div>
      }
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
        <div className="bg-gradient-primary py-32pt">
          <Container className="d-flex flex-column flex-md-row align-items-center text-center text-md-left">
            <img src="/static/courses/images/illustration/student/128/white.svg" className="mr-md-32pt mb-32pt mb-md-0" alt="student" />
            <div className="flex mb-32pt mb-md-0">
              <h1 className="text-white mb-0">Sign In</h1>
              <p className="lead measure-lead text-white-50">Account Management</p>
            </div>
            <Link to="/accounts/signup/" className="btn btn-outline-white flex-column">
                Don't have an account?
              <span className="btn__secondary-text">Sign up Today!</span>
            </Link>
          </Container>
        </div>
        <div className="bg-white pt-32pt pt-sm-64pt pb-32pt">
          <Container className="page__container">
            <Form className="col-md-5 p-0 mx-auto" onSubmit={this.handleSubmit}>
              {this.renderError()}
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input name="email" id="email" type="email" placeholder="Your email address ..." onChange={this.handleChange} invalid={this.errorStatus("email")} required />
                {this.renderError('email')}
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input name="password" id="password" type="password" placeholder="Your password ..." onChange={this.handleChange} invalid={this.errorStatus("password")} required />
                <p className="text-right"><a href="reset-password.html" className="small">Forgot your password?</a></p>
                {this.renderError('password')}
              </FormGroup>
              <div className="text-center">
                <Button className="btn btn-lg btn-accent">Login</Button>
              </div>
            </Form>
          </Container>
        </div>
        <div className="page-separator m-0">
          <div className="page-separator__text">or sign-in with</div>
          <div className="page-separator__bg-top bg-white"></div>
        </div>
        <div className="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
          <Container className="page__container">
            <FacebookLogin
              appId="2657789154334410"
              fields="name,email,picture"
              textButton="Facebook"
              callback={this.responseFacebook}
            />
    <a href="student-dashboard.html" className="btn btn-lg btn-secondary btn-block-xs">Twitter</a>
            <a href="student-dashboard.html" className="btn btn-lg btn-secondary btn-block-xs">Google+</a>
          </Container>
          
        </div>

      </>
    );
  }
  
}

SignIn.propTypes = {
  userSignin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { userSignin }
)(SignIn);