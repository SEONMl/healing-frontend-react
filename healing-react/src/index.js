import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateApp from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cors = require('cors');
root.render(
  <React.StrictMode>
    <StateApp />
  </React.StrictMode>
);
