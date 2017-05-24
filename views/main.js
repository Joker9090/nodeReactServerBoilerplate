import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
var containerApp = document.getElementById('content');
if( containerApp !== null) ReactDOM.render(
  <App {...SCOPE.data} />,
  containerApp
);



import Auth from './components/auth';
var containerAuth = document.getElementById('auth');
if( containerAuth !== null ) ReactDOM.render(
  <Auth />,
  containerAuth
);
