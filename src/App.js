import React, { Component, Fragment } from 'react';
import { LoginForm } from './Pages/login';
// import { LoginForm } from './LoginFormReactHookForm';
// import { unregister } from './interceptor';
import { interceptor } from './interceptor';
import Posts from './Pages/PostsPage';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/navbar';

class App extends Component {
  render() {
    // return (
    //   <main>
    //     <section>
    //       <LoginForm />
    //     </section>
    //     {/* <section>
    //       <Post />
    //     </section> */}
    //   </main>
    // );
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/login' component={LoginForm} />

            <Route exact path='/posts' component={Posts} />
            {/* <Route component={Routes} /> */}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
