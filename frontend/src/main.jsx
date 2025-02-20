import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App'; // Assuming you have an App component
import './main.css'; // Assuming you have a CSS file for styles

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
