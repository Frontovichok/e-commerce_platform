import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselProductImages.module.css";

function CarouselProductImages({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.carousel}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, i) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.original}
              alt={`фото товара ${i}`}
              height={500}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselProductImages;
