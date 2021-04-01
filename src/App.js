import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
