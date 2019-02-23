import React, { Component } from 'react';
import axios from 'axios';
import api from '../api/default';

class NewToken extends React.Component {
  state = {
    email: '',
    password: ''
  };
  handleLogin = event => {
    this.setState({email: event.target.value});
  };
  handlePassword = event => {
    this.setState({password: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    api.post('login', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.state
    }).then(res => {
        axios.defaults.headers.common['Authorization'] = res.data.token;
        console.log(res.data.token);
      }).catch(error => {
        console.log(error);
      })
  };
  render() {
    return (
      <>
      <input onChange={this.handleLogin} type="text" placeholder="Username" />
      <input onChange={this.handlePassword} type="text" placeholder="Password" />
      <button type="submit" onSubmit={this.handleSubmit} className="login-form-button">
        Log in
      </button>
      </>
    );
  }
}
export default NewToken;