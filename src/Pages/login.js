import React, { useState } from 'react';
import logIn from '../Images/login.png';
import Axios from 'axios';
import { interceptor } from '../interceptor';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginForm = () => {
  // const [token, setToken] = useState();
  //

  // const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
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
    // onSubmit: () => {
    //   // alert(`Email: ${email}, password: ${password}`);
    //   const data = await getData();

    //   // const url = 'https://jsonplaceholder.typicode.com/users/1';
    //   // // const request = fetchClient(url, 'get');
    //   // const data = {
    //   //   method: 'GET',
    //   //   headers: {
    //   //     Accept: 'application/json',
    //   //     'Content-Type': 'application/json',
    //   //   },
    //   // };

    //   // let result = fetch(url, data).then((response) => {
    //   //   // response.json();
    //   //   let token = response.data.email;
    //   //   console.log(token);
    //   //   console.log(data);
    //   // });
    //   // console.log(result);
    //   // result.then((response) => {
    //   //   response.json();
    //   //   let token = response.data.email;
    //   //   console.log(token);
    //   //   console.log(data);
    //   //   then((dataJson) => {
    //   //     dataJson.json().then((data) => {
    //   //       console.warn('data api', data);
    //   //     });
    //   // });

    //   // const headers = { 'Content-Type': 'application/json' };
    //   // fetch(url, { headers })
    //   //   .then((response) => {
    //   //     response.json();
    //   //     let token = response.data.email;

    //   //   })
    //   //   .then((data) => this.setState({ totalReactPackages: data.total }));

    //   // console.log(request);
    //   // const res = Axios.get(url)
    //   //   .then((response) => {
    //   //     let token = response.data.email;
    //   //     console.log(token);
    //   //     setToken(token);
    //   //     // const request = client(token);
    //   //     // console.log(request);
    //   //   })
    //   //   .catch((error) => {
    //   //     console.log(error);
    //   //   });

    //   // const request = fetch(url, res);
    //   // let x = 5;
    //   // let _token: { accessToken: string, refreshToken: string } =
    //   // JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '') || null;
    // },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://jsonplaceholder.typicode.com/users/1';

    const res = await Axios.get(url)
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
        const ans = fetch(url, response);
        console.log(ans);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);

    // const request = await fetch(url, res);
    let x = 5;
  };

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

// LoginForm.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default LoginForm;
