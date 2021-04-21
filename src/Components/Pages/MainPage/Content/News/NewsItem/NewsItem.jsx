import { NavLink } from "react-router-dom";
import styles from "./NewsItem.module.css";

function NewsItem(props) {
  return (
    <div className={styles.service}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.img}></img>
        <p className={styles.sticker}>{props.sticker}</p>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <NavLink to="/bla">Подробнее</NavLink>
      </div>
    </div>
  );
}

export default NewsItem;
