import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/' /* baseURL: 'https://project-eternal-return.herokuapp.com/'*/
});

export default api;
