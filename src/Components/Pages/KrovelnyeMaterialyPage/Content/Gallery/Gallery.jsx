import GalleryDesktop from "./Desktop/GalleryDesktop";
import GalleryMobile from "./Mobile/GalleryMobile";

const isMobile = window.innerWidth <= 500;

function Gallery() {
  return isMobile ? (
    <GalleryMobile newsList={newsList} />
  ) : (
    <GalleryDesktop newsList={newsList} />
  );
}

let newsList = [
  {
    id: 1,
    title: "Металлочерепица",
    img: "https://www.onduline.ru/blog/sites/default/files/blog/2017/03/valmovaja-krysha-foto-42.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    id: 2,
    title: "Гибкая черепица",
    img: "https://z500proekty.ru/z500ru/grafika/%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%80%D0%BA%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%BE%D0%BC%D0%B0%20z116%20%D1%84%D0%BE%D1%82%D0%BE5.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    id: 3,
    title: "Композитная черепица",
    img: "https://finestra.biz/upload/medialibrary/8d5/IMG_6738.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    id: 4,
    title: "Натуральная черепица",
    img: "https://finestra.biz/upload/medialibrary/8d5/IMG_6738.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    id: 5,
    title: "Фальцевая кровля",
    img: "https://finestra.biz/upload/medialibrary/8d5/IMG_6738.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    id: 5,
    title: "Конченная кровля",
    img: "https://finestra.biz/upload/medialibrary/8d5/IMG_6738.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
];

export default Gallery;
