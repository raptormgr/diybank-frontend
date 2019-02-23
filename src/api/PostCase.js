import React, { Component } from 'react';
import axios from 'axios';
import api from '../api/default';
import {history} from '../components/routing';

class PostCase extends React.Component {
  state = {
      name: '',
      conditions: [''],
      actions: ['']
    };
  handleSubmit = event => {
    const casetest = [
	{
		"Name": "postcasetest",
		"Conditions": [
			{
				"type": "spend"
			}
		],
		"Actions": [
			{
				"type": "spend"
			}
		]
	}
];
    api.post('cases', casetest).then(res => {
        console.log(res.data.title);
        history.push('/custom/test');
      }).catch(error => {
        console.log(error);
      })
  };
  render() {
    return (
      <>
      <button type="submit" className = "login-form-button" onClick={this.handleSubmit}>
        POST CASE
      </button>
      </>
    );
  }
}
export default PostCase;
