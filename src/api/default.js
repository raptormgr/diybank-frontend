import axios from 'axios';

export default axios.create({
  baseURL: 'http://diybankapi.us.to/api/v1/'
});
