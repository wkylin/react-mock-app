import React, { useEffect } from 'react';
import './App.css';
import { login, serve504, serve500 , logout, corsLoginCheck, corsLogin} from './service/api'
function App() {

  useEffect(() => {
    logout({userName:'wkylin'})
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
