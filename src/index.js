import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from 'views/Home';
import './assets/styles/main.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* invoca o componente entre tags */}
    <Home/>
  </React.StrictMode>
);