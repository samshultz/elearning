import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import { connect } from "react-redux";
import { userLogout } from "../../actions/userActions";
import PropTypes from "prop-types";

class SignOut extends Component {

  componentDidMount(){
    this.props.userLogout()
    localStorage.clear()
    delete axios.defaults.headers.common['Authorization']
  }

  render(){
    
    return (
     <Redirect to="/" />
    );
  }
  
}

SignOut.propTypes = {
  userLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { userLogout }
)(SignOut);