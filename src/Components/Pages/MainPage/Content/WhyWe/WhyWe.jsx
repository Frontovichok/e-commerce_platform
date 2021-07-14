import styles from "./WhyWe.module.css";
import hammer from "./hammer.svg";
import rating from "./rating.svg";
import calendar from "./calendar.svg";
import term from "./term.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

function WhyWe() {
  let [endedNumbersAnimation, endNumbersAnimation] = useState([
    false,
    false,
    false,
    false,
  ]);

  const numbersAnimationOnChange = (isVisible, start, animantionNumber) => {
    if (endedNumbersAnimation[animantionNumber] === false && isVisible) {
      endNumbersAnimation(
        endedNumbersAnimation.map((numb, i) =>
          i === animantionNumber ? (numb = true) : numb
        )
      );
      start();
    }
  };

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
            {/* <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={hammer}
            /> */}
            <div>
              <p className={styles.number}>
                <CountUp end={1500} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        numbersAnimationOnChange(isVisible, start, 1);
                      }}
                      delayedCall
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
                м²
              </p>
              <p className={styles.title}>Смонтировано</p>
            </div>
          </div>
          <div className={styles.advantageCard}>
            {/* <img src={rating} className={styles.advantageImage} alt="Why We" />
             */}
            {/* <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={rating}
            /> */}
            <div>
              <p className={styles.number}>
                <CountUp end={15} redraw={false} duration={1} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        numbersAnimationOnChange(isVisible, start, 2);
                      }}
                      delayedCall
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className={styles.title}>Выполненных проектов</p>
            </div>
          </div>
          <div className={styles.advantageCard}>
            {/* <img
              src={calendar}
              className={styles.advantageImage}
              alt="Why We"
            /> */}
            {/* <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={calendar}
            /> */}
            <div>
              <p className={styles.number}>
                <CountUp end={5} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        numbersAnimationOnChange(isVisible, start, 3);
                      }}
                      delayedCall
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className={styles.title}>Лет на рынке</p>
            </div>
          </div>
          <div className={styles.advantageCard}>
            {/* <img src={term} className={styles.advantageImage} alt="Why We" /> */}
            {/* <LazyLoadImage
              className={styles.advantageImage}
              alt="Why We"
              effect="opacity"
              src={term}
            /> */}
            <div>
              <p className={styles.number}>
                <CountUp end={10} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        numbersAnimationOnChange(isVisible, start, 4);
                      }}
                      delayedCall
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className={styles.title}>Лет гарантии на работу</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWe;
