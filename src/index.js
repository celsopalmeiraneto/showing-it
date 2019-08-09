import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/database';

ReactDOM.render(<App />, document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyCdETQa7jvvs38zR-Zuq8wAuZnzc0p57ek",
  authDomain: "showing-it.firebaseapp.com",
  databaseURL: "https://showing-it.firebaseio.com",
  projectId: "showing-it",
  storageBucket: "showing-it.appspot.com",
  messagingSenderId: "1070919037505",
  appId: "1:1070919037505:web:f83dab603304875a"
};
firebase.initializeApp(firebaseConfig);
