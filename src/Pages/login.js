import React, { useState } from 'react';
import logIn from '../Images/login.png';
// import Axios from 'axios';
import { interceptor } from '../interceptor';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../interceptor';

export const LoginForm = () => {
  // const [token, setToken] = useState();
  //

  // const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
  //   useFormik({
  const { handleChange, values, touched, errors, handleBlur } = useFormik({
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
    // onSubmit: (email, password) => {
    //   alert(`Email: ${email}, password: ${password}`);
    // },
  });

  const submit = async (e) => {
    e.preventDefault();

    const url = 'https://jsonplaceholder.typicode.com/users/1';

    const res = await axios
      .get(url)
      .then((response) => {
        let token = response.data.email;
        console.log(token);
        if (token) {
          localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
          localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        // response.headers.platform = token;
        // console.log(response);
        // setAuthorization(token);
        // const ans = fetch(url, response);
        // console.log(ans);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);

    // const request = await fetch(url, res);
    let x = 5;
  };

  return (
    <form onSubmit={submit}>
      <header>
        <img width='60' src={logIn} alt='log in' />
      </header>
      <label htmlFor='email'>Email</label>
      <input
        value={values.email}
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

// LoginForm.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default LoginForm;
