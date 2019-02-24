import axios from 'axios';
import api from '../api/default';

export default function PostCase(requestbody) {
    api.post('cases', requestbody).then(res => {
        console.log(res.data.title);
      }).catch(error => {
        console.log(error);
      })
}
