import axios from 'axios';

export function getTodaysRate() {
  console.log('hello');
  return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then((response) => {
    if (response.status === 200) {
      return response.data.bpi;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
