import ModalNews from "../ModalNews/ModalNews";
import styles from "./NewsDesktop.module.css";

function NewsDesktop(props) {
  return (
    <section className="sectionMainPage">
      <div>
        <h2 className={"sectionTitle"}>Последние события</h2>
        <div className={styles.newsContainer}>
          {props.newsList.map((news, i) => (
            <div className={styles.news}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={news.img}></img>
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
