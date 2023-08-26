import React from 'react'; 
import { Routes, Route } from 'react-router-dom';  
import { Auth, Home, Account, Error } from './pages/index';  

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Auth />} /> 
        <Route path='/home' element={<Home />} />  
        <Route path='/account' element={<Account />} />  
        <Route path='*' element={<Error />} /> 
      </Routes>
    </>
  );
}

export default App;
