import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
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
            src="https://realnoevremya.ru/uploads/articles/ad/30/7190a79019a0c1ba.jpg"
            alt="First slide"
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://zakon365.ru/wp-content/uploads/2019/07/komanda.jpg"
            alt="Second slide"
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://krovmart.ru/wp-content/uploads/2018/08/krov-16-1200x600.jpg"
            alt="Third slide"
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
