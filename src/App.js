import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./Components/Pages/MainPage/MainPage";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import KrovelnyeMaterialyPage from "./Components/Pages/KrovelnyeMaterialyPage/KrovelnyeMaterialyPage";
import NotFound from "./Components/Pages/NotFound/NotFound";
import PricePage from "./Components/Pages/PricePage/PricePage";
import CalculatePage from "./Components/Pages/PricePage/SubPages/CalculatePage/CalculatePage";
import About from "./Components/Pages/About/About";
import FasadnyeSistemyPage from "./Components/Pages/FasadnyeSistemyPage/FasadnyeSistemyPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            exact
            path="/krovelnye-materialy"
            component={KrovelnyeMaterialyPage}
          />
          <Route
            exact
            path="/fasadnye-sistemy"
            component={FasadnyeSistemyPage}
          />
          <Route exact path="/price" component={PricePage} />
          <Route exact path="/calculate" component={CalculatePage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
