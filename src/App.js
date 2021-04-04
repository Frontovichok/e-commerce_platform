import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styles from './App.module.css';
import MainPage from './Components/Pages/MainPage/MainPage';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import KrovelnyeMaterialyPage from './Components/Pages/KrovelnyeMaterialyPage/KrovelnyeMaterialyPage';
import NotFound from './Components/Pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/krovelnye-materialy" component={KrovelnyeMaterialyPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
  );
}

export default App;
