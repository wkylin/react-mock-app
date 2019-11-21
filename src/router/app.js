import React, { useEffect } from 'react';

import { logout } from '../service/api';

// import CopyTable from '../components/copyTable';
import AppLayout from '../components/appLayout/index';

function App() {
  useEffect(() => {
    logout({ userName: 'wkylin' }).then((res) => {
      console.log('res==>>', res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      {/* <header className="App-header">Hello, React</header> */}
      <AppLayout />
      {/* <CopyTable /> */}
    </div>
  );
}

export default App;
