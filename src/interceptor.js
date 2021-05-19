import fetchIntercept from 'fetch-intercept';
// import Condition from 'yup/lib/Condition';
import axios from 'axios';
// const axios = require('axios');

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const interceptor = axios.create({
  baseURL: `https://`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Step-2: Create request, response & error handlers
const requestHandler = (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  if (
    JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')) !== null &&
    request !== undefined
  ) {
    request.headers.token = JSON.parse(
      localStorage.getItem('REACT_TOKEN_AUTH')
    );
  } else {
    request.headers.token = '';
  }

  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
interceptor.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

export default interceptor;
