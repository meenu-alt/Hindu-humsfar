// src/config/api.js
export default {
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://yourdomain.com/api'
    : 'http://localhost/perfomdigi/hindu-humsfar-react/backend/index.php',
  endpoints: {
    register: 'register_controller/register'
  }
};