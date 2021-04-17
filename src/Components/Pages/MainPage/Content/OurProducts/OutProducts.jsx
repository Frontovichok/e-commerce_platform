import styles from "./OurProducts.module.css";

function OurProducts() {
  return (
    <div>
      <h1>Каталог наших товаров</h1>
      <p>Мы реализуем самую качественную продукцию на российском рынке</p>
      <div className={styles.productList}></div>
    </div>
  );
}

export default OurProducts;
