import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styles from './App.module.css';
import MainPage from './Components/MainPage/MainPage';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </>
  </BrowserRouter>
  );
}

export default App;
