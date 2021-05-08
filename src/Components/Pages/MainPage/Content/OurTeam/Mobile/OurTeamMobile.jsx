import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./OurTeamMobile.module.css";

function OurTeamMobile() {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.sectionDarkBackground}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>
          Наша команда
        </h2>
        <div className={styles.workersContainer}>
          <CarouselProvider
            touchEnabled={true}
            visibleSlides={1}
            totalSlides={workersList.length}
            step={1}
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            dragEnabled={false}
          >
            <Slider>
              {workersList.map((worker, i) => (
                <Slide index={i} key={worker.id}>
                  <div className={styles.workerContainer}>
                    <div className={styles.worker}>
                      <img
                        className={`${styles.image} n${i + 1}`}
                        src={worker.avatar}
                      />
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

let workersList = [
  {
    id: 0,
    name: "Инокентий Галимый",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Vladimir_Putin_in_KGB_uniform.jpg",
    position: "Старший менеджер",
    description: "Классный чел, но иногда кидает на бабки",
  },
  {
    id: 1,
    name: "Валентин Галимый",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%9C%D0%B0%D1%82%D0%B2%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0.jpg/267px-%D0%9C%D0%B0%D1%82%D0%B2%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0.jpg",
    position: "Старший менеджер",
    description: "Классный чел, но иногда кидает на бабки",
  },
  {
    id: 2,
    name: "Инокентий Галимый",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alexander_Lukashenko_in_April_2021.jpg/230px-Alexander_Lukashenko_in_April_2021.jpg",
    position: "Старший менеджер",
    description: "Классный чел, но иногда кидает на бабки",
  },
  {
    id: 3,
    name: "Шакал Галимый",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dmitry_Medvedev_2016.jpg",
    position: "Старший менеджер",
    description: "Классный чел, но иногда кидает на бабки",
  },
];
