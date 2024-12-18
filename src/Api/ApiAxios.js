import axios from 'axios';

// Buat instance Axios
const ApiAxios = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiAxios;
