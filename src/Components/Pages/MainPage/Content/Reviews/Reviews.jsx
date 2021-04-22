import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
  Image,
} from "pure-react-carousel";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.reviewsContainer}>
        <CarouselProvider
          touchEnabled={false}
          visibleSlides={3}
          totalSlides={5}
          step={1}
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          dragEnabled={false}
        >
          <h2 className={`sectionTitle ${styles.sectionTitle}`}>
            Отзывы клиентов
          </h2>
          <Slider>
            <Slide index={0}>
              <div className={styles.reviewContainer}>
                <div className={styles.review}>
                  <div className={styles.avatarBlock}>
                    <img
                      className={styles.image}
                      src="https://icdn.lenta.ru/images/2020/01/21/17/20200121173026292/pwa_vertical_1280_432cc897322b61cb9fe5778fc7a7521c.jpg"
                    />
                    <div className={styles.nameContainer}>
                      <p className={styles.name}>Инокентий</p>
                      <p className={styles.reviewData}>21.02.2015</p>
                      <div className={styles.rating}>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating name="read-only" value={3} readOnly />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewTextContainer}>
                    <p className={styles.reviewText}>
                      The Slide component is a container with an intrinsic ratio
                      computed by the CarouselProvider naturalSlideWidth and
                      naturalSlideHeight properties. By default, only one slide
                      is visible in the Slider at a time. You can change this by
                      altering the visibleSlides property of the
                      CarouselProvider. Slide components also contain a div that
                      acts as an aria compliant focus ring when the Slide
                      receives focus either by using a keyboard tab, mouse
                      click, or touch
                    </p>
                    <button className={styles.continueRead}>
                      Читать далее
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className={styles.reviewContainer}>
                <div className={styles.review}>
                  <div className={styles.avatarBlock}>
                    <img
                      className={styles.image}
                      src="https://www.interfax.ru/ftproot/textphotos/2020/01/22/belousov700.jpg"
                    />
                    <div className={styles.nameContainer}>
                      <p className={styles.name}>Автондил</p>
                      <p className={styles.reviewData}>21.02.2015</p>
                      <div className={styles.rating}>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating name="read-only" value={3} readOnly />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewTextContainer}>
                    <p className={styles.reviewText}>
                      The Slide component is a container with an intrinsic ratio
                      computed by the CarouselProvider naturalSlideWidth and
                      naturalSlideHeight properties. By default, only one slide
                      is visible in the Slider at a time. You can change this by
                      altering the visibleSlides property of the
                      CarouselProvider. Slide components also contain a div that
                      acts as an aria compliant focus ring when the Slide
                      receives focus either by using a keyboard tab, mouse
                      click, or touch
                    </p>
                    <button className={styles.continueRead}>
                      Читать далее
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className={styles.reviewContainer}>
                <div className={styles.review}>
                  <div className={styles.avatarBlock}>
                    <img
                      className={styles.image}
                      src="https://altairk.ru/upload/news/87/31/20180926_fns_16.jpg"
                    />
                    <div className={styles.nameContainer}>
                      <p className={styles.name}>Валентин</p>
                      <p className={styles.reviewData}>21.02.2015</p>
                      <div className={styles.rating}>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating name="read-only" value={3} readOnly />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewTextContainer}>
                    <p className={styles.reviewText}>
                      The Slide component is a container with an intrinsic ratio
                      computed by the CarouselProvider naturalSlideWidth and
                      naturalSlideHeight properties. By default, only one slide
                      is visible in the Slider at a time. You can change this by
                      altering the visibleSlides property of the
                      CarouselProvider. Slide components also contain a div that
                      acts as an aria compliant focus ring when the Slide
                      receives focus either by using a keyboard tab, mouse
                      click, or touch
                    </p>
                    <button className={styles.continueRead}>
                      Читать далее
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div className={styles.reviewContainer}>
                <div className={styles.review}>
                  <div className={styles.avatarBlock}>
                    <img
                      className={styles.image}
                      src="http://www.yugopolis.ru/data/img/996ef5b560e2a9bdc522a93e8ced2dc7/315404.jpg"
                    />
                    <div className={styles.nameContainer}>
                      <p className={styles.name}>Константин</p>
                      <p className={styles.reviewData}>21.02.2015</p>
                      <div className={styles.rating}>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating name="read-only" value={3} readOnly />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewTextContainer}>
                    <p className={styles.reviewText}>
                      The Slide component is a container with an intrinsic ratio
                      computed by the CarouselProvider naturalSlideWidth and
                      naturalSlideHeight properties. By default, only one slide
                      is visible in the Slider at a time. You can change this by
                      altering the visibleSlides property of the
                      CarouselProvider. Slide components also contain a div that
                      acts as an aria compliant focus ring when the Slide
                      receives focus either by using a keyboard tab, mouse
                      click, or touch
                    </p>
                    <button className={styles.continueRead}>
                      Читать далее
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className={styles.reviewContainer}>
                <div className={styles.review}>
                  <div className={styles.avatarBlock}>
                    <img
                      className={styles.image}
                      src="https://img.gazeta.ru/files3/4/12922004/RIAN_6129842.HR-pic4_zoom-1500x1500-43145.jpg"
                    />
                    <div className={styles.nameContainer}>
                      <p className={styles.name}>Катерина</p>
                      <p className={styles.reviewData}>21.02.2015</p>
                      <div className={styles.rating}>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating name="read-only" value={3} readOnly />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewTextContainer}>
                    <p className={styles.reviewText}>
                      The Slide component is a container with an intrinsic ratio
                      computed by the CarouselProvider naturalSlideWidth and
                      naturalSlideHeight properties. By default, only one slide
                      is visible in the Slider at a time. You can change this by
                      altering the visibleSlides property of the
                      CarouselProvider. Slide components also contain a div that
                      acts as an aria compliant focus ring when the Slide
                      receives focus either by using a keyboard tab, mouse
                      click, or touch
                    </p>
                    <button className={styles.continueRead}>
                      Читать далее
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <ButtonFirst>First</ButtonFirst>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          <ButtonLast>Last</ButtonLast>
          <DotGroup />
        </CarouselProvider>
      </div>

      {/* <div className={styles.sectionDarkBackground}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>Наша команда</h2>
        <div className={styles.container}>
          <div className={styles.reviewContainer}>
            <div className={styles.avatarAndName}>img and name</div>
            <div className={styles.description}>review</div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Reviews;
