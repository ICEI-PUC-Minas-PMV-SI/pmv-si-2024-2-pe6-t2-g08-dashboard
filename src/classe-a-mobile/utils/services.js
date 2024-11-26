import axios from 'axios';
//import 'dotenv/config';

const services = axios.create({
  //baseURL: "https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com", // Replace with your API's base URL
  baseURL: 'http://localhost:4000',
  withCredentials: true, 
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json; charset=utf-8',
  },
});

/*services.interceptors.request.use(
  async(config) =>{
    config.headers.
    return config;
  }
);*/

const loginRequest = (email, password) => {
  return services
    .post('/login', { email, password })
    .then((response) => {
      console.log(response);
      return {...response.data};
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

const logoutRequest = () => {
  return services
    .post('/logout')
    .then((response) => {
      console.log('response:', response);
      return response;
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

const getUserInfo = (userId) => {
  return services
   .get(`/users/${userId}`)
   .then((response) =>{
     console.log('response:', response);
     return response.data;
   })
   .catch((error) =>{
     console.log('error:', error);
     alert(error);
   });
};

const getClientInfo = (clientId) => {
  return services
   .get(`/clients/${clientId}`)
   .then((response) =>{
     console.log('response:', response);
     return response.data;
   })
   .catch((error) =>{
     console.log('error:', error);
     alert(error);
   });
};

export { loginRequest, logoutRequest, getClientInfo, getUserInfo };
export default services;
