import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
ReactDOM.render(
  <div>
  <BrowserRouter><App/></BrowserRouter>
    
  </div>,
  document.getElementById('root')
);


