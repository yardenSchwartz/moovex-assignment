import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Login from '../auth/Login';
// import Alert from '../layout/Alert';
import LoginForm from '../Pages/login';
// import Posts from '../../cposts/Posts';
import Posts from '../Pages/PostsPage';
// import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <section className='container'>
      {/* <Alert /> */}
      <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/posts' component={Posts} />
        {/* <PrivateRoute exact path="/posts/:id" component={Post} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};

export default Routes;
