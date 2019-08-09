import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/database';

ReactDOM.render(<App />, document.getElementById('root'));

firebase.initializeApp();
