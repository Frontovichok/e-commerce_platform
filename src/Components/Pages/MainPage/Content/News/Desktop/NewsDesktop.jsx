import ModalNews from "../ModalNews/ModalNews";
import styles from "./NewsDesktop.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function NewsDesktop(props) {
  return (
    <section className="sectionMainPage">
      <div>
        <h2 className={"sectionTitle"}>
          {["Последние события"].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>
        <div className={styles.newsContainer}>
          {props.newsList.map((news, i) => (
            <div className={styles.news} key={news.id}>
              <div className={styles.imageContainer}>
                {/* <img className={styles.image} src={news.img} alt="News"></img> */}
                <LazyLoadImage
                  className={styles.image}
                  alt="News"
                  effect="opacity"
                  src={news.img}
                />
                <p className={styles.sticker}>{news.sticker}</p>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{news.title}</h3>
                <p className={styles.description}>{news.description}</p>
                <ModalNews
                  news={news}
                  button={
                    <button className={styles.continueReadButton}>
                      Читать полностью
                    </button>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsDesktop;
