import axios from 'axios';
//import 'dotenv/config';

const services = axios.create({
  baseURL: "https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com", // Replace with your API's base URL
  withCredentials: true, // Send cookies with every request
  headers:{
    "Access-Control-Allow-Origin":"*",
    "content-type":"application/json; charset=utf-8"
  }
});

const loginRequest = async (email, password) => {
  services
    .post('/login', { email, password })
    .then((response) =>{
      console.log('response:', response);
      return response
    })
    .catch((error) =>{
      console.log('error:', error);
      alert(error);
    });
};

const logoutRequest = async (email, password) => {
  services
    .post('/logout')
    .then((response) =>{
      console.log('response:', response);
      return response
    })
    .catch((error) =>{
      console.log('error:', error);
      alert(error);
    });
};
export { loginRequest, logoutRequest };
export default services;
