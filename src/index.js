import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
//import reportWebVitals from './reportWebVitals';


import {
  BrowserRouter as Router,
 
} from "react-router-dom";
ReactDOM.render(
  <Router>
    <GoogleOAuthProvider clientId="416926803848-cvnqjqj2dhupt6g82skau27kfho26bpm.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
  </Router>,
  document.getElementById('root')
);






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
