import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// It is a common convention in React development to set up a separate root component, often referred to as the "App" component.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// StrictMode is a tool for highlighting potential problems in an application. Activates additional checks and warnings for its descendants. Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

// Simply remove reportWebBitals() and the import
