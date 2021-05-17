import RoofType from "./RoofType/RoofType";
import styles from "./RoofTypes.module.css";

function RoofTypes() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={"sectionTitle"}>Виды кровли</h2>
        <div className={styles.roofTypesContainer}>
          {servicesList.map((service, i) => (
            <RoofType {...service} gallery={gallery[i]} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

let gallery = [
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

export default RoofTypes;
