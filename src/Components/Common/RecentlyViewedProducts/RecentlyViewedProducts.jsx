import styles from "./RecentlyViewedProducts.module.css";
import Slider from "react-slick";

function RecentlyViewedProducts({ slidesToShow = 4 }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 4,
    // lazyLoad: true,
  };
  return (
    <div className={styles.recentlyViewedProducts}>
      <h2 className={styles.title}>Вы недавно смотрели</h2>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/shop1c/13/55813.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/shop1c/39/232839.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/shop1c/48/188348.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/shop1c/52/29052.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/shop1c/78/78678.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/gallery/metallocherepica/classic/8004/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%D0%A4%D0%B8%D0%BD%D1%85%D0%B0%D1%83%D1%81_%D0%9C%D0%A7%20Classic_Satin%20Matt_8004_%D0%A1%D0%BD%D0%B5%D0%B6%D0%BE%D0%BA%20Snowkit_%D0%B2%D0%BE%D0%B4%D0%BE%D1%81%D1%82%D0%BE%D0%BA%20125%D1%8590_26.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://www.grandline.ru//image/data/shop1c/13/55813.jpg" />
          <div className={styles.info}>
            <h4>200 ₽</h4>
            <p>SYNERGETIC / Набор Гель</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default RecentlyViewedProducts;
