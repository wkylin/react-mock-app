import React, { useEffect } from 'react';
import './App.css';
// import axios from 'axios'
import { login, serve504, serve500 } from './service/api'
function App() {

  useEffect(() => {
    // axios.get(`http://localhost:4001/`)
    // axios.get(`http://localhost:4001/api/notfound`)
    // axios.get(`http://localhost:4001/api/login/`)
    login({userName:'wkylin'})
    // serve504()
      .then(res => {
        console.log('res==>>', res);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello, React</header>
    </div>
  );
}

export default App;
