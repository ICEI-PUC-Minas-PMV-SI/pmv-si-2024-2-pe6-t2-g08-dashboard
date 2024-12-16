import axios from 'axios';
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//import 'dotenv/config';

const firebaseConfig = {
  apiKey: "AIzaSyAAkFZHevbPw-RAdX3LoFUk9hWCoZ-xYRY",
  authDomain: "g8-classe-a-company.firebaseapp.com",
  projectId: "g8-classe-a-company",
  storageBucket: "g8-classe-a-company.appspot.com",
  messagingSenderId: "429435376174",
  appId: "1:429435376174:web:ce82fc91f84b6dba8a85bf",
  measurementId: "G-NP10E8GLJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth();

const services = axios.create({
 // baseURL: "https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com", // Replace with your API's base URL
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json; charset=utf-8',
  },
});

const loginRequest = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return services
    .post('/login', { email, password })
    .then((response) => {
      console.log(response);
      return { ...response.data };
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
    .then((response) => {
      console.log('response:', response);
      return response.data;
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

const getClientInfo = (userId) => {
  return services
    .get(`/clients/${userId}`)
    .then((response) => {
      console.log('response:', response);
      return response.data;
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

const getAllCampaigns = (clientId) => {
  return services
    .get(`/campaigns/all/${clientId}`)
    .then((response) => {
      console.log('response:', response);
      return response.data;
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

const getAllCreatives = (campaignId) => {
  return services
    .get(`/post-creatives/all/${campaignId}`)
    .then((response) => {
      console.log('response:', response);
      return response.data;
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

const getAllEvents = () => {
  return services
    .get(`/calendar/`)
    .then((response) => {
      console.log('response:', response);
      return response.data;
    })
    .catch((error) => {
      console.log('error:', error);
      alert(error);
    });
};

export { loginRequest, logoutRequest, getClientInfo, getUserInfo, getAllCampaigns, getAllCreatives, getAllEvents, app };
export default services;
