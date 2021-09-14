import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCategoryPage from "./Components/Pages/ProductCategoryPage/ProductCategoryPage";
import NotFound from "./Components/Pages/NotFound/NotFound";
import PricePage from "./Components/Pages/PricePage/PricePage";
import About from "./Components/Pages/About/About";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import ProductsPage from "./Components/Pages/ProductsPage/ProductsPage";
import FindedProducts from "./Components/Pages/FindedProducts/FindedProducts";
import ScrollToTop from "./Components/Common/ScrollToTop/ScrollToTop";
import TopBar from "./Components/TopBar/TopBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import productsCategories from "./data/productsCategories.json";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            path="/catalog/:categoryName/:subCategoryName?/:subSubCategoryName?"
            component={ProductCategoryPage}
          />
          {/* {productsCategories.map((category, i) => {
            return (
              <Route
                key={i}
                path={category.link}
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} component={ProductCategoryPage} />
                    {category.subMenu.map((subCategory, j) => (
                      <Route
                        key={j}
                        path={subCategory.link}
                        component={ProductsPage}
                      />
                    ))}
                  </>
                )}
              ></Route>
            );
          })} */}
          <Route path="/product/:article?" component={ProductPage} />
          <Route path="/search/:searchQuery?" component={FindedProducts} />
          <Route exact path="/price" component={PricePage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
