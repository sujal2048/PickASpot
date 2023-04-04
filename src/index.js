import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <GoogleOAuthProvider clientId="416926803848-cvnqjqj2dhupt6g82skau27kfho26bpm.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
  </Router>,
  document.getElementById('root')
);





