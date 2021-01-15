import axios from 'axios';

const erbsApi = axios.create({
  baseURL: 'https://open-api.bser.io/v1/'
});

export default erbsApi;
