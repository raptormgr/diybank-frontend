import React, { Component } from 'react';
import axios from 'axios';
import api from '../api/default';

class GetCases extends React.Component {
  state = {
    cases: []
  };
  componentDidMount() {
    if(axios.defaults.headers.common['Authorization']){
      api.get('cases?').then(res => {
        const cases = res.data;
        console.log(res.data);
        this.setState({ cases });
      }).catch(error => {
        console.log(error);
      });
    } else console.log('skdjfdksjf');
  };
  render() {
    if(this.state.cases){
      return this.state.cases.map(function(item, i){
          console.log('test');
          return <li key={i}>{item.ID + ' | ' + item.Name + ' | ' + item.Conditions + ' | ' + item.Actions + ' | '}</li>
        });
    } else return <div>dksjalkdjklsajdklsjakdljaslkdjlksajdlksjadlkjaslkdjaslkjdlksajdlksajdlksjalkdjslkdjslakdjlksajda</div>

  }
}

export default GetCases;
