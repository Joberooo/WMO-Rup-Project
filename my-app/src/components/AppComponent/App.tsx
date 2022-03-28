import React, { Component } from 'react';
import Nav from '../NavComponent/Nav';
import Reader from '../ReaderComponent/Reader';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Nav />
        <Reader />
      </React.StrictMode>
    </div>
  );
}

export default App;
