import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Headers from './components/Header';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import UpdateEmployee from './components/UpdateEmployee';
// import Login from './auth/Login';
// import Register from './auth/Register';

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/view' element={<ViewEmployee />} />
        <Route path='/edit/:id' element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
