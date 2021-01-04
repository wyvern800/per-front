import axios from 'axios';

const api = axios.create({
  baseURL: 'https://project-eternal-return.herokuapp.com/'
});

export default api;