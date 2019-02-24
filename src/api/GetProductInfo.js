import axios from 'axios';

export const GetProductInfo = () => {
  if(axios.defaults.headers.common['Authorization']){
    axios.get('http://diybank.aeb-it.ru/api/product').then(res => {
      return res.data
      console.log(res.data)
    }).catch(error => {
      console.log(error);
    });
  } else console.log('skdjfdksjf');
}

export default GetProductInfo
