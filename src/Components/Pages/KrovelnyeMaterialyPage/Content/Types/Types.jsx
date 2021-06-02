import Type from "./Type/Type";
import styles from "./Types.module.css";

function Types() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={"sectionTitle"}>
          {["Виды кровли"].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>
        <div className={styles.typesContainer}>
          {servicesList.map((service, i) => (
            <Type {...service} gallery={gallery[i]} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

let gallery = [
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

let servicesList = [
  {
    id: 1,
    title: "Металлочерепица",
    img: "https://кровля-в-москве.рф/sites/default/files/styles/new/public/polimernye-membrany-gallery-12.png?itok=ihxv8eqP",
    sticker: "Металлочерепица",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sfLorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
    link: "krovelnye-materialy/metallocherepitca",
  },
  {
    id: 2,
    title: "Гибкая черепица",
    img: "https://кровля-в-москве.рф/sites/default/files/styles/new/public/remont-krovli-krishy.jpg?itok=QTNL25_G",
    sticker: "Гибкая черепица",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sfLorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
    link: "krovelnye-materialy/gibkaya_cherepitca",
  },
  {
    id: 3,
    title: "Композитная черепица",
    img: "https://кровля-в-москве.рф/sites/default/files/styles/new/public/naplav.jpg?itok=7SRJsVGa",
    sticker: "Композитная черепица",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sfLorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
    link: "krovelnye-materialy/kompositnaya_cherepitca",
  },
  {
    id: 4,
    title: "Натуральная черепица",
    img: "https://кровля-в-москве.рф/sites/default/files/styles/new/public/fa97f11bb4ee7e7954824fcf12a26778.jpg?itok=7aBHpVyu",
    sticker: "Натуральная черепица",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sfLorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
    link: "krovelnye-materialy/naturalnaya_cherepitca",
  },
  {
    id: 5,
    title: "Фальцевая кровля",
    img: "https://кровля-в-москве.рф/sites/default/files/styles/new/public/ondulinmon3t.jpg?itok=kT9ctF4X",
    sticker: "Фальцевая кровля",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sfLorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
    link: "krovelnye-materialy/falcevaya_cherepitca",
  },
  {
    id: 6,
    title: "Рулонные гидроизоляционные материалы",
    img: "https://кровля-в-москве.рф/sites/default/files/styles/new/public/tile-1591715_1920.jpg?itok=3rWt9kI4",
    sticker: "Рулонные гидроизоляционные материалы",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sfLorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
    link: "krovelnye-materialy/gidroizolyazionnye_materialy",
  },
];

export default Types;
