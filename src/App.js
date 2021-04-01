import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styles from './App.module.css';
import MainPage from './Components/MainPage/MainPage';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
