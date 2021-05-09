import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Reviews.module.css";
import ModalReview from "./ModalReview/ModalReview";

const isMobile = window.innerWidth <= 500;

function Reviews() {
  return (
    <section className={`sectionMainPage ${styles.reviews}`}>
      <div className={styles.reviewsContainer}>
        <CarouselProvider
          touchEnabled={true}
          visibleSlides={isMobile ? 1 : 3}
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
            {reviewsList.map((review, i) => (
              <Slide index={i} key={review.id}>
                <div className={styles.reviewContainer}>
                  <div className={styles.review}>
                    <div className={styles.avatarBlock}>
                      <img className={styles.image} src={review.avatar} alt="Review"/>
                      <div className={styles.nameContainer}>
                        <p className={styles.name}>{review.name}</p>
                        <p className={styles.reviewData}>{review.data}</p>
                        <div className={styles.rating}>
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                            className={styles.rating}
                          >
                            <Rating
                              name="read-only"
                              value={review.rating}
                              readOnly
                            />
                          </Box>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reviewTextContainer}>
                      <p className={styles.reviewText}>{review.description}</p>
                      <ModalReview
                        review={review}
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

export default Reviews;

let reviewsList = [
  {
    id: 0,
    name: "Инокентий",
    avatar:
      "https://icdn.lenta.ru/images/2020/01/21/17/20200121173026292/pwa_vertical_1280_432cc897322b61cb9fe5778fc7a7521c.jpg",
    data: "11.01.2021",
    rating: 3,
    description:
      "The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch",
    images: [
      "https://www.ctep.ru/blog/wp-content/uploads/2018/11/DJI_0011_isp-620x350.jpg",
      "https://blokspb.ru/upload/iblock/538/53870594c6d01d21322efd70f55890c8.jpg",
      "https://bouw.ru/wp-content/uploads/2019/03/1-5-640x373.jpg",
    ],
  },
  {
    id: 1,
    name: "Валентин",
    avatar:
      "https://www.interfax.ru/ftproot/textphotos/2020/01/22/belousov700.jpg",
    data: "12.01.2021",
    rating: 4,
    description:
      "The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch",
    images: [
      "https://www.ctep.ru/blog/wp-content/uploads/2018/11/DJI_0011_isp-620x350.jpg",
      "https://blokspb.ru/upload/iblock/538/53870594c6d01d21322efd70f55890c8.jpg",
      "https://bouw.ru/wp-content/uploads/2019/03/1-5-640x373.jpg",
    ],
  },
  {
    id: 2,
    name: "Костя",
    avatar: "https://altairk.ru/upload/news/87/31/20180926_fns_16.jpg",
    data: "13.01.2021",
    rating: 5,
    description:
      "The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch",
    images: [
      "https://www.ctep.ru/blog/wp-content/uploads/2018/11/DJI_0011_isp-620x350.jpg",
      "https://blokspb.ru/upload/iblock/538/53870594c6d01d21322efd70f55890c8.jpg",
      "https://bouw.ru/wp-content/uploads/2019/03/1-5-640x373.jpg",
    ],
  },
  {
    id: 3,
    name: "Автондил",
    avatar:
      "http://www.yugopolis.ru/data/img/996ef5b560e2a9bdc522a93e8ced2dc7/315404.jpg",
    data: "14.01.2021",
    rating: 4,
    description:
      "The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch. The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch",
    images: [
      "https://www.ctep.ru/blog/wp-content/uploads/2018/11/DJI_0011_isp-620x350.jpg",
      "https://blokspb.ru/upload/iblock/538/53870594c6d01d21322efd70f55890c8.jpg",
      "https://bouw.ru/wp-content/uploads/2019/03/1-5-640x373.jpg",
    ],
  },
  {
    id: 4,
    name: "Катюша",
    avatar:
      "https://img.gazeta.ru/files3/4/12922004/RIAN_6129842.HR-pic4_zoom-1500x1500-43145.jpg",
    data: "15.01.2021",
    rating: 2,
    description:
      "The Slide component is a container with an intrinsic ratio computed by the CarouselProvider naturalSlide Width andnaturalSlideHeight properties. By default, only one slideis visible in the Slider at a time. You can change this byaltering the visibleSlides property of theCarouselProvider. Slide components also contain a div thatacts as an aria compliant focus ring when the Slidereceives focus either by using a keyboard tab, mouseclick, or touch",
    images: [
      "https://www.ctep.ru/blog/wp-content/uploads/2018/11/DJI_0011_isp-620x350.jpg",
      "https://blokspb.ru/upload/iblock/538/53870594c6d01d21322efd70f55890c8.jpg",
      "https://bouw.ru/wp-content/uploads/2019/03/1-5-640x373.jpg",
    ],
  },
];
