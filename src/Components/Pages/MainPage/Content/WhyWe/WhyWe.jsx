import styles from "./WhyWe.module.css";
import hammer from "./hammer.svg";
import rating from "./rating.svg";
import calendar from "./calendar.svg";
import term from "./term.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function WhyWe() {
  return (
    <section className={`sectionMainPage ${styles.whyWe}`}>
      <div className={styles.imageContainer}>
        <h2 className={`sectionTitle dark ${styles.sectionTitle}`}>
          {["Почему клиенты выбирают нас"].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>
        <div className={styles.advantagesContainer}>
          <div className={styles.advantageCard}>
            {/* <img src={hammer} className={styles.advantageImage} alt="Why We" /> */}
            <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={hammer}
            />
            <div>
              <p className={styles.number}>1500 м²</p>
              <p className={styles.title}>Смонтировано</p>
            </div>
          </div>
          <div className={styles.advantageCard}>
            {/* <img src={rating} className={styles.advantageImage} alt="Why We" />
             */}
            <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={rating}
            />
            <div>
              <p className={styles.number}>15</p>
              <p className={styles.title}>Выполненных проектов</p>
            </div>
          </div>
          <div className={styles.advantageCard}>
            {/* <img
              src={calendar}
              className={styles.advantageImage}
              alt="Why We"
            /> */}
            <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={calendar}
            />
            <div>
              <p className={styles.number}>5</p>
              <p className={styles.title}>Лет на рынке</p>
            </div>
          </div>
          <div className={styles.advantageCard}>
            {/* <img src={term} className={styles.advantageImage} alt="Why We" /> */}
            <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={term}
            />
            <div>
              <p className={styles.number}>2</p>
              <p className={styles.title}>Года гарантии на работу</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWe;
