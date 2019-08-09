import {LocalPresentation} from './screens/presentation/LocalPresentation.js';
import {Login} from './screens/login';
import {Router} from "@reach/router";
import React, {useState} from 'react';
import styles from './App.module.css';

function App() {
  const [loginInfo, setLoginInfo] = useState({});

  return (
    <div className={styles.App}>
      <Router>
        <Login path="/"></Login>
        <LocalPresentation path="presentation/local/:presentation/:slideIndex"></LocalPresentation>
      </Router>
    </div>
  );
}

export default App;
