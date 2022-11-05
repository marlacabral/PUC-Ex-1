import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import 'bootswatch/dist/slate/bootstrap.min.css';
import Header from './header/header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />    
  </React.StrictMode>,
  document.getElementById('root')
);