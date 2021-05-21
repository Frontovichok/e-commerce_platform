import { NavLink } from "react-router-dom";
import styles from "./Content.module.css";
import ControlledCarousel from "./Carousel/Carousel";
import ContactWithMe from "../../../ContactWithMe/ContactWithMe";
import OurTeam from "./OurTeam/OurTeam";
import Reviews from "./Reviews/Reviews";

function Content() {
  return (
    <div>
      <section className="section">
        <div className={styles.breadcrumb}>
          <NavLink to="/">Главная</NavLink>
          <p>&nbsp; / &nbsp;</p>
          <p>О компании</p>
        </div>
        <div className={styles.contentContainer}>
          <ControlledCarousel />
          <div className={styles.blocksContainer}>
            <div className={styles.block}>
              <div className={styles.imageContainer}>
                <img src="https://www.hbfuller.nl/-/media/images/careers/teamwork-diverstiy-mission-and-culture.jpg" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Миссия</h2>
                <p className={styles.description}>
                  Alphabet Design. Хороший пример того, как флет может сохранять
                  свою актуальность и быть конверсионным в 2018 году. Страница
                  “О компании”, посвященная этой дизайн-студии оформлена без
                  какого-либо анимационного или динамичного включения. Только
                  текст, качественные фото, строгая статичная инфографика и
                  продуманная структура повествования. Но смотрится хорошо,
                  актуально, по-деловому. На странице представлена информация о
                  компании, ее специалистах, схеме работы и принципах
                  деятельности. Конверсионный венец оформления – предложение
                  посмотреть примеры работ.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.imageContainer}>
                <img src="https://lh3.googleusercontent.com/proxy/0b5v9Wthj1rhDhBOxvRCPrIGZXgc5T5vtPyUUjng4vrx1FJOneSm9BqvMx7j5y4cyg5V0bJ33cOSAzIE6spJnp7Op7sbizILgCEBDkABHl08R89IJKSi_P5JG32W_jfMqkesu9I" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>История Компании</h2>
                <p className={styles.description}>
                  Roshen. Хороша с продающей точки зрения страница “О компании”
                  у фабрики “Рошен”. Удобная навигация, сочная картинка на фоне,
                  инфографика с объяснением преимуществ продукции и сервиса.
                  Есть видео о фабрике, карта со странами-экспортерами, фото
                  магазинов и прочая располагающая к доверию информация.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.imageContainer}>
                <img src="https://blog.hubspot.com/hubfs/company-values.jpg" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Ценности</h2>
                <p className={styles.description}>
                  Franklyn. Рисованная команда специалистов, список брендов,
                  среди которых Disney, The New York Times, Google, Converse,
                  прочие монстры, и даже тотемное животное Бастер. Примерно
                  таким оригинальным, но в тоже время продающим способом
                  оформлена страница “О нас” известной дизайн-студии “Франклин”.
                  Краткое вступление о компании дополняется уникальными
                  рисованными портретами ключевых игроков команды и Бастера,
                  логотипами брендовых клиентов и контактами. Мало, на первый
                  взгляд, но этого вполне достаточно для того, чтобы расположить
                  к себе потенциального клиента.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.imageContainer}>
                <img src="https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-our-services-concept-meaning-occupation-function-serving-intangible-products-male-wear-160644151.jpg" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Что мы предлагаем клиентам</h2>
                <p className={styles.description}>
                  Dragon Rouge. Красный Дракон чествует гостей самым стильным и
                  креативным дизайном страницы “О нас”. Анимированные шрифты,
                  крупная типографика, необычные иллюстрации, карточки –
                  минимализм в лучших его проявлениях. Кроме краткого и емкого
                  введения, на странице представлена развернутая информация о
                  работниках и представительствах корпорации в разных странах.
                  Обойти стороной огромную надпись: “Нравится, что видишь здесь?
                  Хочешь узнать больше? Давай поговорим!”, – крайне сложно.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.imageContainer}>
                <img src="https://miro.medium.com/max/5838/0*xnqo5pj_xrCMNcVl" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Гарантия качества</h2>
                <p className={styles.description}>
                  Nike. Нельзя сказать, что и “Найк” удивляет новизной
                  оформления своей презентационной страницы. Но уж точно его
                  дизайнеры позаботились о солидном наполнении и продающем
                  внешнем виде последней. Первый экран лендостранички –
                  презентация миссии с фоновым автовоспроизведением видео. Ниже
                  – хорошо визуализированная и структурированная информация о
                  бренде, инновациях, команде, комьюнити и релевантных ресурсах.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.ourTeamContainer}>
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
