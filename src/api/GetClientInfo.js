import axios from 'axios';

export const GetClientInfo = () => {
  if(axios.defaults.headers.common['Authorization']){
    axios.get('http://diybank.aeb-it.ru/api/client').then(res => {
      localstorage.setItem('fio', res.surname + res.firstName + res.patronymic)
      localstorage.getItem('fio')
    }).catch(error => {
      console.log(error);
    });
  } else console.log('skdjfdksjf');
}

export default GetClientInfo
