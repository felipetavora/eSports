import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   //this component show two renders on console
   // <React.StrictMode>
   <App />
   // </React.StrictMode>
);
