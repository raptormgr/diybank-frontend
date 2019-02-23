import axios from 'axios';

export default axios.create({
  baseURL: 'http://diybankapi.s-vfu.ru/api/v1/'
});
