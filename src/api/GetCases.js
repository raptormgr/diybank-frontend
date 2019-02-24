import React, { Component } from 'react';
import axios from 'axios';
import api from '../api/default';

export const GetCases = () => {
  if(axios.defaults.headers.common['Authorization']){
    api.get('cases').then(res => {
      return res.data;
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    });
  } else console.log('skdjfdksjf');
}

export default GetCases;
