import axios from 'axios';
//import 'dotenv/config';

const services = axios.create({
  //baseURL: "https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com", // Replace with your API's base URL
  baseURL:"http://localhost:4000",
  withCredentials: true, // Send cookies with every request
  headers:{
    "Access-Control-Allow-Origin":"*",
    "content-type":"application/json; charset=utf-8"
  }
});

const loginRequest = (email, password) => {
   return services
    .post('/login', { email, password })
    .then((response) =>{
      console.log('response:', response);
      return response.data;
    })
    .catch((error) =>{
      console.log('error:', error);
      alert(error);
    });
};

const logoutRequest =  () => {
  return services
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

const getAllUsers = () => {
  return services
   .get('/users')
   .then((response) =>{
     console.log('response:', response);
     return response.data;
   })
   .catch((error) =>{
     console.log('error:', error);
     alert(error);
   });
};

const getAllClients = () => {
  return services
   .get('/clients')
   .then((response) =>{
     console.log('response:', response);
     return response.data;
   })
   .catch((error) =>{
     console.log('error:', error);
     alert(error);
   });
};

const getAllPlans = () => {
  return services
   .get('/plans')
   .then((response) =>{
     console.log('response:', response);
     return response.data;
   })
   .catch((error) =>{
     console.log('error:', error);
     alert(error);
   });
};

const createUser = (payload) => {
  return services
   .post('/users',{...payload})
   .then((response) =>{
     console.log('response:', response);
     return response.data;
   })
   .catch((error) =>{
     console.log('error:', error);
     alert(error);
   });
};
export { loginRequest, logoutRequest, createUser, getAllUsers, getAllClients, getAllPlans };
export default services;
