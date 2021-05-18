import React, { Component } from 'react';
import { LoginForm } from './Pages/login';
// import { LoginForm } from './LoginFormReactHookForm';
import { unregister } from './interceptor';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <LoginForm />
        </section>
      </main>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
