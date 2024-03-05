'use client';

import axios from 'axios';

// initializing the axios instance with custom configs
const api = axios.create({
  withCredentials: false,
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

export default api;
