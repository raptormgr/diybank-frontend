import React, { Component } from 'react';
import axios from 'axios';
import {history} from '../components/routing';
import api from '../api/default';

class NewToken extends React.Component {
  state = {
    username: '',
    password: ''
  };
  handleLogin = event => {
    this.setState({username: event.target.value});
  };
  handlePassword = event => {
    this.setState({password: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    api.post('login', this.state).then(res => {
        axios.defaults.headers.common['Authorization'] = res.data.token;
        console.log(res.data.token);
        history.push('/');
      }).catch(error => {
        console.log(error);
      })
  };
  render() {
    return (
      <>
      <input onChange={this.handleLogin} type="text" placeholder="Пользователь" className="login-input"/>
      <input onChange={this.handlePassword} type="password" placeholder="Пароль" className="password-input" />
      <div onClick={this.handleSubmit} className="login-button">
      </div>
      </>
    );
  }
}
export default NewToken;
