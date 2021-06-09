import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./OurTeamMobile.module.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";

function OurTeamMobile(props) {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.sectionDarkBackground}>
        <h2 className={`sectionTitle dark ${styles.sectionTitle}`}>
          {["Наша команда"].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>
        <div className={styles.workersContainer}>
          <CarouselProvider
            touchEnabled={true}
            visibleSlides={1}
            totalSlides={props.workers.length}
            step={1}
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            dragEnabled={false}
          >
            <Slider>
              {props.workers.map((worker, i) => (
                <Slide index={i} key={worker.id}>
                  <div className={styles.workerContainer}>
                    <div className={styles.worker}>
                      <img
                        className={`${styles.image} n${i + 1}`}
                        src={worker.avatar}
                        alt="Worker"
                      />
                      {/* <LazyLoadImage
                        className={`${styles.image} n${i + 1}`}
                        alt="Worker"
                        effect="opacity"
                        src={worker.avatar}
                      /> */}
                      <p className={styles.name}>{worker.name}</p>
                      <p className={styles.position}>{worker.position}</p>
                      <p className={styles.description}>{worker.description}</p>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
}

export default OurTeamMobile;
