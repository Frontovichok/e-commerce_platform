import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import KrovelnyeMaterialyPage from "./Components/Pages/KrovelnyeMaterialyPage/KrovelnyeMaterialyPage";
import NotFound from "./Components/Pages/NotFound/NotFound";
import PricePage from "./Components/Pages/PricePage/PricePage";
import About from "./Components/Pages/About/About";
import FasadnyeSistemyPage from "./Components/Pages/FasadnyeSistemyPage/FasadnyeSistemyPage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import ProductsPage from "./Components/Pages/ProductsPage/ProductsPage";
import ScrollToTop from "./Components/Common/ScrollToTop/ScrollToTop";
import { createBrowserHistory } from "history";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            path="/krovelnye-materialy"
            render={({ match: { url } }) => (
              <>
                <Route
                  path={`${url}/`}
                  component={KrovelnyeMaterialyPage}
                  exact
                />
                <Route
                  path={`${url}/metallocherepitca`}
                  component={ProductsPage}
                />
                <Route
                  path={`${url}/gibkaya_cherepitca`}
                  component={ProductsPage}
                />
                <Route path={`${url}/profnastil`} component={ProductsPage} />
                <Route
                  path={`${url}/kompositnaya_cherepitca`}
                  component={ProductsPage}
                />
                <Route
                  path={`${url}/naturalnaya_cherepitca`}
                  component={ProductsPage}
                />
                <Route
                  path={`${url}/falcevaya_cherepitca`}
                  component={ProductsPage}
                />
                <Route
                  path={`${url}/gidroizolyazionnye_materialy`}
                  component={ProductsPage}
                />
                <Route
                  path={`${url}/kopmplectuyshie`}
                  component={ProductsPage}
                />
              </>
            )}
          />
          <Route
            exact
            path="/fasadnye-sistemy"
            component={FasadnyeSistemyPage}
          />
          <Route path="/product/:productId?" component={ProductPage} />
          <Route exact path="/price" component={PricePage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
