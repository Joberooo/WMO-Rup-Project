import React from 'react';
import { ToastContainer } from 'react-toastify';
import Nav from '../NavComponent/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Nav />
      </React.StrictMode>
      <ToastContainer />
    </div>
  );
}

export default App;
