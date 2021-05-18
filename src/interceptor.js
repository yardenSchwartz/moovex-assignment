import fetchIntercept from 'fetch-intercept';
// import Condition from 'yup/lib/Condition';
import axios from 'axios';

export const unregister = fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here

    if (
      JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')) !== null &&
      config !== undefined
    ) {
      config.headers.token = JSON.parse(
        localStorage.getItem('REACT_TOKEN_AUTH')
      );
    }

    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  },
});

// Call fetch to see your interceptors in action.
// fetch('http://google.com');

// Unregister your interceptor
// unregister();

// export const setAuthorization = (token) => {
//   api.interceptors.request.use((config) => {
//     config.headers.Authorization = token;
//     return config;
//   });
// };

// const api = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const api= axios.create({
//   baseURL: 'http://exemple.com'
// });

// export default setAuthorization;
