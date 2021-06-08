import { NavLink } from "react-router-dom";
import styles from "./Content.module.css";
import ControlledCarousel from "./Carousel/Carousel";
import ContactWithMe from "../../../Common/ContactWithMe/ContactWithMe";
import OurTeam from "../../../Common/OurTeam/OurTeam";
import Reviews from "../../../Common/Reviews/Reviews";

function Content() {
  return (
    <div>
      <section className="section">
        <div className="breadcrumb">
          <NavLink to="/">Главная</NavLink>
          <p>&nbsp; / &nbsp;</p>
          <p>О компании</p>
        </div>
        <div className={styles.contentContainer}>
          <ControlledCarousel />
          <div className={styles.blocksContainer}>
            {aboutCompanyBlocks.map((block, i) => (
              <div key={i} className={styles.block}>
                <div className={styles.imageContainer}>
                  <h2 className={styles.titleMobile}>{block.title}</h2>
                  <img src={block.image} />
                </div>
                <div className={styles.textContainer}>
                  <h2 className={styles.titleDesktop}>{block.title}</h2>
                  <p className={styles.description}>{block.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ourTeamContainer}>
            {/* <OurTeam /> */}
            <OurTeam />
          </div>
          <Reviews />
          <div className={styles.contactWithMeContainer}>
            <ContactWithMe />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;

let aboutCompanyBlocks = [
  {
    title: "Миссия",
    description:
      "Alphabet Design. Хороший пример того, как флет может сохранять свою актуальность и быть конверсионным в 2018 году. Страница “О компании”, посвященная этой дизайн-студии оформлена без какого-либо анимационного или динамичного включения. Только текст, качественные фото, строгая статичная инфографика и продуманная структура повествования. Но смотрится хорошо, актуально, по-деловому. На странице представлена информация о компании, ее специалистах, схеме работы и принципах деятельности. Конверсионный венец оформления – предложениепосмотреть примеры работ.",
    image:
      "https://www.hbfuller.nl/-/media/images/careers/teamwork-diverstiy-mission-and-culture.jpg",
  },
  {
    title: "История Компании",
    description: `Roshen. Хороша с продающей точки зрения страница “О компании”
      у фабрики “Рошен”. Удобная навигация, сочная картинка на фоне,
      инфографика с объяснением преимуществ продукции и сервиса.
      Есть видео о фабрике, карта со странами-экспортерами, фото
      магазинов и прочая располагающая к доверию информация.`,
    image:
      "https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-our-services-concept-meaning-occupation-function-serving-intangible-products-male-wear-160644151.jpg",
  },
  {
    title: "Ценности",
    description: `Franklyn. Рисованная команда специалистов, список брендов,
      среди которых Disney, The New York Times, Google, Converse,
      прочие монстры, и даже тотемное животное Бастер. Примерно
      таким оригинальным, но в тоже время продающим способом
      оформлена страница “О нас” известной дизайн-студии “Франклин”.
      Краткое вступление о компании дополняется уникальными
      рисованными портретами ключевых игроков команды и Бастера,
      логотипами брендовых клиентов и контактами. Мало, на первый
      взгляд, но этого вполне достаточно для того, чтобы расположить
      к себе потенциального клиента.`,
    image: "https://blog.hubspot.com/hubfs/company-values.jpg",
  },
  {
    title: "Что мы предлагаем клиентам",
    description: `Dragon Rouge. Красный Дракон чествует гостей самым стильным и
      креативным дизайном страницы “О нас”. Анимированные шрифты,
      крупная типографика, необычные иллюстрации, карточки –
      минимализм в лучших его проявлениях. Кроме краткого и емкого
      введения, на странице представлена развернутая информация о
      работниках и представительствах корпорации в разных странах.
      Обойти стороной огромную надпись: “Нравится, что видишь здесь?
      Хочешь узнать больше? Давай поговорим!”, – крайне сложно.`,
    image:
      "https://www.hbfuller.nl/-/media/images/careers/teamwork-diverstiy-mission-and-culture.jpg",
  },
  {
    title: "Гарантия качества",
    description: `Nike. Нельзя сказать, что и “Найк” удивляет новизной
      оформления своей презентационной страницы. Но уж точно его
      дизайнеры позаботились о солидном наполнении и продающем
      внешнем виде последней. Первый экран лендостранички –
      презентация миссии с фоновым автовоспроизведением видео. Ниже
      – хорошо визуализированная и структурированная информация о
      бренде, инновациях, команде, комьюнити и релевантных ресурсах.`,
    image: "https://miro.medium.com/max/5838/0*xnqo5pj_xrCMNcVl",
  },
];
