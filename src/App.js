import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import { login, serve504, serve500 } from './service/api'
function App() {

  useEffect(() => {
    // axios.get(`http://localhost:4001/`)
    // axios.get(`http://localhost:4001/api/notfound`)
    // axios.get(`http://localhost:4001/api/login/`)
    // login({userName:'wkylin'})
    serve504()
    // serve500()
      .then(res => {
        console.log('res==>>', res);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

    </div>
  );
}

export default App;
