import axios from "axios";

const api = axios.create({
  baseURL: 'https://61be6edf2a1dd4001708a30c.mockapi.io/api/v1/'
});

export default api;