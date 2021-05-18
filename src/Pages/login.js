import React from 'react';
import logIn from '../Images/login.png';
import Axios from 'axios';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const setToken = (token) => {
  if (token) {
    localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
  } else {
    localStorage.removeItem('REACT_TOKEN_AUTH');
  }
  // _token = token;
  // notify();
};

export const LoginForm = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          // .min(6, 'Password should be longer than 6 characters')
          .required('Required'),
      }),
      onSubmit: ({ email, password }) => {
        alert(`Email: ${email}, password: ${password}`);
        Axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then((response) => {
            let token = response.data.email;
            console.log(token);
            setToken(token);
          })
          .catch((error) => {
            console.log(error);
          });

        // let _token: { accessToken: string, refreshToken: string } =
        // JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '') || null;
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <img width='60' src={logIn} alt='log in' />
      </header>
      <label htmlFor='email'>Email</label>
      <input
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        id='email'
        name='email'
        type='text'
      />
      {touched.email && errors.email ? <div>{errors.email}</div> : null}
      <label htmlFor='password'>Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id='password'
        name='password'
        type='password'
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}
      <button type='submit'>Log in</button>
    </form>
  );
};
