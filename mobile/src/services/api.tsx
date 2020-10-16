import axios from 'axios';

const api = axios.create({
  baseURL:'http://192.168.31.55:3333',
  //baseURL: 'http://localhost:3333'
});

export default api;