import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './page/Login';


function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
