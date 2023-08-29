import React from 'react';
import { Routes, Route, Home, LoginCenter, Account, PrivateRoute, Error } from './NamedExports';  

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginCenter/>} />
        <Route path='/home' element={<PrivateRoute element={<Home />} redirectTo='/' />} />
        <Route path='/account' element={<PrivateRoute element={<Account />} redirectTo='/' />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
