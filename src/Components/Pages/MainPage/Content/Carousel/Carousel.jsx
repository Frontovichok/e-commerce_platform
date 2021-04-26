import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CalculatePrice from "./CalculatePrice/CalculatePrice";
import styles from "./Carousel.module.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.carousel}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://кровля-в-москве.рф/sites/default/files/slide2.jpg"
            alt="First slide"
            height={500}
          />
          <Carousel.Caption className={styles.textLeft}>
            <h1 className={styles.carouselTtemTitle}>Кровля под ключ</h1>
            <p className={styles.carouselTtemDescription}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://кровля-в-москве.рф/sites/default/files/slide3.jpg"
            alt="Second slide"
            height={500}
          />

          <Carousel.Caption>
            <h1 className={styles.carouselTtemTitle}>Индивидуальный подход</h1>
            <p className={styles.carouselTtemDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://кровля-в-москве.рф/sites/default/files/slide1.jpg"
            alt="Third slide"
            height={500}
          />

          <Carousel.Caption>
            <h1 className={styles.carouselTtemTitle}>Высокое качество</h1>
            <p className={styles.carouselTtemDescription}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CalculatePrice />
    </div>
  );
}

export default ControlledCarousel;
