import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import productsCategories from "../../../data/productsCategories.json";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import styles from "./FindedProducts.module.css";
import { getAllProducts } from "../../../Redux/actions/productsActions";

function FindedProducts(props) {
  //   const [state, setState] = useState([]);
  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setState(res.message);
  //         console.log("res: ", res);
  //       });
  //     setTimeout(() => console.log(state), 3000);
  //   });
  const location = useLocation();
  let params = useParams();
  let categoriesNames = [];
  console.log("props: ", props);
  // if (!props.isAllCategoriesLoaded) {
  console.log(productsCategories);
  productsCategories.map((category) => {
    categoriesNames.push(category.link.split("/")[2]);
  });

  useEffect(() => {
    props.getAllProducts(props.products);
  }, []);
  // }
  console.log(categoriesNames);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb path={[{ link: "/", text: "Главная" }, { text: "/" }]} />
        </div>
        <div className={styles.content}>
          <div className={styles.hi}>
            По запросу {params.q} найдено N товаров
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAllCategoriesLoaded: state.products.isAllCategoriesLoaded,
  products: state.products.products,
});

export default connect(mapStateToProps, { getAllProducts })(FindedProducts);
