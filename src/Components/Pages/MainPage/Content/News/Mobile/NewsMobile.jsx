import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ModalNews from "../ModalNews/ModalNews";
import styles from "./NewsMobile.module.css";

function NewsMobile(props) {
  return (
    <section className={`sectionMainPage ${styles.news}`}>
      <h2 className={`sectionTitle ${styles.sectionTitle}`}>
        Последние события
      </h2>
      <div className={styles.newsContainer}>
        <CarouselProvider
          touchEnabled={true}
          visibleSlides={1}
          totalSlides={props.newsList.length}
          step={1}
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          dragEnabled={false}
        >
          <Slider>
            {props.newsList.map((news, i) => (
              <Slide index={i} key={news.id}>
                <div className={styles.newsItemContainer}>
                  <div className={styles.newsItem}>
                    <img
                      className={`${styles.image} n${i + 1}`}
                      src={news.img}
                    />
                    <div className={styles.content}>
                      <p className={styles.name}>{news.name}</p>
                      <p className={styles.description}>{news.description}</p>
                      <ModalNews
                        news={news}
                        button={
                          <button className={styles.continueRead}>
                            Читать полностью
                          </button>
                        }
                      />
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <DotGroup />
        </CarouselProvider>
      </div>
    </section>
  );
}

export default NewsMobile;
